import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SCRECT_KEY,
    }),
    FacebookProvider({
      clientId: process.env.APP_ID,
      clientSecret: process.env.APP_SECRET,
    }),
    // ...add more providers here
  ],
})