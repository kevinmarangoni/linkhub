import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const nextSecret = process.env.NEXTAUTH_SECRET;
const userAccount = null;

export const authOptions = {
    session:{
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),

          GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),

          DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
          })
    ],
  callbacks: {
    // async signIn({ user }) {
    //   return user;
    // },
    // async session({ session, token, user }) {
    // //   if (userAccount !== null) {
    // //     session = userAccount;
    // //   } else if (typeof token !== typeof undefined) {
    // //     session = token;
    // //   }
    // //   session.user.id = token.user.id;
    //   return session;
    // },
    // async jwt({ token, user }) {
    // //   if (typeof user !== typeof undefined) {
    // //     token.user = user;
    // //   }
    //   return token;
    // }'
    async signIn({ user, account, profile, email, credentials }) {
        return true
      },
      async redirect({ url, baseUrl }) {
        return baseUrl
      },
      async session({ session, user, token }) {
        return session
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token
      }
  },
  pages: {
    signIn: "/"
  }

}

export default NextAuth(authOptions)