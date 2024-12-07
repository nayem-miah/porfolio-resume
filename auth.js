import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";


import Credentials from "next-auth/providers/credentials";
import { dbConnect } from "./databaseConncet/mongo";
import clientPromise from "./databaseConncet/mongoClientPromise";
import { userModel } from "./models/user-model";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  providers: [

    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          await dbConnect();
          const user = await userModel.findOne({ email: credentials?.email });
          if (user) {
            const isMatch =credentials.password === user.password;
            
            if (isMatch) {
              return user;
            } else {
              throw new Error("Email or Password mismatch");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),

  ],

  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return {
          ...token,
          ...session.user,
        };
      }
      return { ...token, ...user };
    },

    async session({ session }) {
      return session;
    },
  },
});
