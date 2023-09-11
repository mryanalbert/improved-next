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
};
