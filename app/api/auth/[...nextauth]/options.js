import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"

export const options = {
  session: {
    strategy: "jwt",
  },
  secret: 'kdjdkfjd',
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        const { username, password } = credentials

        if (username == 'admin' && password == 'admin1') {
          return { name: 'Ryan', email: 'r@gmail.com', password: 'admin1' }
        }
        console.log('Invalid')
      }
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      return session
    },
    jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token
        token.id = user.id
      }
      return token
    }
  }
}