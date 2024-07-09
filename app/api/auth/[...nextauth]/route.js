import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '@/lib/mongodb';
import { hash, compare } from 'bcryptjs';

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { db } = await connectToDatabase();
        const user = await db.collection('logindata').findOne({ email: credentials.email });

        if (user && await compare(credentials.password, user.password)) {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const { db } = await connectToDatabase();

      if (account.provider === 'credentials') {
        return true;
      }

      const existingUser = await db.collection('logindata').findOne({ email: user.email });

      if (!existingUser) {
        const newUser = {
          name: profile.name || user.name,
          email: user.email,
          image: user.image,
          provider: account.provider,
          providerAccountId: account.id,
        };
        await db.collection('logindata').insertOne(newUser);
      }
      return true;
    },
    async session({ session, token, user }) {
      const { db } = await connectToDatabase();
      const userData = await db.collection('logindata').findOne({ email: session.user.email });

      if (userData) {
        session.user.id = userData._id;
        session.user.name = userData.name;
        session.user.image = userData.image;
      }

      return session;
    },
  },
};

const handler = (req, res) => NextAuth(req, res, options);

export { handler as GET, handler as POST };
