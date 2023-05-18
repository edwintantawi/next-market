import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';

import { env } from '~/lib/env.mjs';
import { database } from '~/lib/database';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(database),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const existingUser = await database.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!existingUser) {
        token.id = user.id;
        return token;
      }

      return {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        picture: existingUser.image,
      };
    },
  },
};
