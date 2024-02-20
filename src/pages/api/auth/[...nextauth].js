import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER, // see details of server{} object in .env file
            from: process.env.EMAIL_FROM,
            maxAge: 30,
        }),
        // ...add more providers here
    ],
    adapter: MongoDBAdapter(clientPromise),
    // database: process.env.MONGODB_URI

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        jwt: true,
    },
    callbacks: {
        async session({ session, user }) {
            session.user.userId = user.id;
            return session;
        },
    },
    theme: {
        colorScheme: "dark",
        brandColor: "#4E8074",
        logo: "/finaljarlogo.png",
    },

    // pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
    // }
})
