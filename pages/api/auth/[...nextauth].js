import NextAuth, { User } from "next-auth";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";
import EmailProvider from "next-auth/providers/email";
const sequelize = new Sequelize({
  dialect: "sqlite",
});
// Calling sync() is not recommended in production

sequelize.sync();
export default NextAuth({
  // session: {
  //   strategy: "database",
  // },
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: SequelizeAdapter(sequelize),
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
    // secret: process.env.NEXTAUTH_SECRET,
  },
});
