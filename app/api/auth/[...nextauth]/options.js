import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const options = {
  jwt: { maxAge: 60 * 5 },
  session: { strategy: "jwt", maxAge: 60 * 5 },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { username, password } = credentials;

        if (username == "admin" && password == "admin1") {
          console.log({
            name: "Ryan",
            email: "r@gmail.com",
            password: "admin1",
          });
          return { name: "Ryan", email: "r@gmail.com", password: "admin1" };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
