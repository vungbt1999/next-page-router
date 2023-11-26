// @ts-nocheck
import { authApi } from '@/utils/apis';
import NextAuth, { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const signInRes = await authApi.signIn({
            username: credentials?.username ?? '',
            password: credentials?.password ?? ''
          });
          const userProfile = signInRes.data.user;
          const jwtAuth = signInRes.data.jwt;
          if (userProfile && jwtAuth) {
            return { ...jwtAuth, id: userProfile.id } as User;
          }
          return null;
        } catch (error) {
          console.log('NextAuth authorize', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      let newToken = token as JWT;
      if (!newToken.accessToken && user) {
        newToken = user;
      }
      if (
        newToken?.expires &&
        new Date(newToken.expires).getTime() <= new Date().getTime() + 60000
      ) {
        // return refreshToken({
        //   refreshToken: String(newToken?.refreshToken || '')
        // }).then((result) => {
        //   if (result.error) {
        //     return signOut();
        //   }
        //   return { ...newToken, . ..result };
        // });
      }
      return { ...newToken, role: user?.role ?? 'admin' };
    },
    async session({ session, token }: any) {
      session.token = {
        accessToken: token.accessToken,
        accessTokenExpires: token.expires
      };
      session.expires = token.expires;
      session.role = token?.role ?? 'admin';
      delete session.user;
      return session;
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  pages: {
    signIn: '/employee/login'
  }
};
export default NextAuth(authOptions);
