import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"


export default async function auth(req, res) {
    return await NextAuth(req, res, {
        adapter: MongoDBAdapter(clientPromise),
        // Configure one or more authentication providers
        providers: [
            EmailProvider({
                server: process.env.EMAIL_SERVER, // see details of server{} object in .env file
                from: process.env.EMAIL_FROM,
                sendVerificationRequest({
                    identifier: email,
                    url,
                    provider: { server, from },
                }) {
                    /* your function */
                },
            }),
            // ...add more providers here
        ],
        database: process.env.MONGODB_URI
    })
}