import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";

import Credentials from "next-auth/providers/credentials";

import clientPromise from "./databaseConncet/mongoClientPromise";
import { userModel } from "./models/user-model";
import { dbConnect } from "./databaseConncet/mongo";
import bcrypt from "bcryptjs";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // Use JWT for session management
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
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
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
});
