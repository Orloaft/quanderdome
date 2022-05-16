import NextAuth, { User } from "next-auth";
import SequelizeAdapter from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";
import EmailProvider from `next-auth/providers/email`
const sequelize = new Sequelize("yourconnectionstring");

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: SequelizeAdapter(sequelize),
});
