import { Account } from "next-auth";
import { Adapter, AdapterUser, VerificationToken } from "next-auth/adapters";
export default function NextAuthAdapter() {
  return {
    async createUser(user) {
      if (user.email) {
        return toAdapterUser(await createByEmail(user.email));
      }
      throw new Error("Cannot create user: " + JSON.stringify(user));
    },
    async createUserByUsername(username) {
      return toAdapterUser(await createByUsername(username));
    },
    async getUser(id) {
      console.log("getUser", id);
      return toAdapterUser(await findById(id));
    },
    async getUserByUsername(username) {
      const user = await findByUsername(username);
      if (!user) {
        return null;
      }
      return toAdapterUser(user);
    },
    async getUserByEmail(email) {
      const user = await findByEmail(email);
      if (!user) {
        return null;
      }
      return toAdapterUser(user);
    },
    async getUserByAccount({ providerAccountId, provider }) {
      console.log("getUserByAccount", providerAccountId, provider);
      return undefined;
    },
    async updateUser(user) {
      const dbUser = await findById(user.id);
      await userTable.update(dbUser, user);
      return user;
    },
    async deleteUser(userId) {
      return;
    },
    async linkAccount(account) {
      console.log("getUserByAccount", account);
      return account;
    },
    async unlinkAccount({ providerAccountId, provider }) {
      console.log("getUserByAccount", providerAccountId, provider);
      return;
    },
    async createSession({ sessionToken, userId, expires }) {
      const session = {
        id: sessionToken,
        sessionToken: sessionToken,
        userId: userId,
        expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), // one year later
      };
      (await getRedis()).set(sessionToken, JSON.stringify(session), {
        EX: +expires - +new Date(),
      });
      return session;
    },
    async getSessionAndUser(sessionToken) {
      const sessionJson = await (await getRedis()).get(sessionToken);
      const session = sessionJson ? JSON.parse(sessionJson) : undefined;
      if (!session) {
        return null;
      }
      const user = toAdapterUser(await findById(session.userId));
      // Type fixup:
      session.expires = new Date(session.expires);
      return { session, user };
    },
    async updateSession({ sessionToken, userId, expires }) {
      const sessionJson = await (await getRedis()).get(sessionToken);
      const session = sessionJson ? JSON.parse(sessionJson) : undefined;
      if (session) {
        // Type fixup:
        session.expires = new Date(session.expires);
      }
      return this.createSession({ ...session, sessionToken, userId, expires });
    },
    async deleteSession(sessionToken) {
      await (await getRedis()).del(sessionToken);
    },
    async createVerificationToken({ identifier, expires, token }) {
      (await getRedis()).set(token, identifier, { EX: +expires - +new Date() });
      return { identifier, expires, token };
    },
    async useVerificationToken({ identifier, token }) {
      return { identifier, token, expires: new Date() };
    },
  };
}
