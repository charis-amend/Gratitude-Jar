import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"
import nodemailer from "nodemailer"


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER, // see details of server{} object in .env file
            from: process.env.EMAIL_FROM,
            maxAge: 30,
            async sendVerificationRequest({
                identifier: email,
                url,
                provider: { server, from },
            }) {
                const { host } = new URL(url)
                const transport = nodemailer.createTransport(server)
                await transport.sendMail({
                    to: email,
                    from,
                    subject: `Sign in to ${host}`,
                    text: text({ url, host }),
                    html: html({ url, host, email }),
                })
            }
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
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
})

// ------------------------- CUSTOM EMAIL CONFIGURATION ---------------------------
// Email HTML body
function html({ url, host, email }) {
    // Insert invisible space into domains and email address to prevent both the
    // email address and the domain from being turned into a hyperlink by email
    // clients like Outlook and Apple mail, as this is confusing because it seems
    // like they are supposed to click on their email address to sign in.
    const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`
    const escapedHost = `${host.replace(/\./g, "&#8203;.")}`

    return `
    <mjml>
    <mj-body background-color="#F4F4F4" color="#55575d" font-family="Arial, sans-serif">
        <mj-section background-color="#000000" background-repeat="no-repeat" text-align="center" vertical-align="top">
            <mj-column>
                <mj-image align="center" border="none" padding-bottom="30px" padding="10px 25px" src="/finaljarlogo.png" target="_blank" title="" width="180px"></mj-image>
            </mj-column>
        </mj-section>
        <mj-section background-color="#000000" background-repeat="no-repeat" text-align="center" vertical-align="top" padding="0 0 0 0">
            <mj-column>
                <mj-text align="left" color="#55575d" font-family="Arial, sans-serif" font-size="13px" line-height="22px" padding-bottom="5px" padding-top="25px" padding="10px 25px">
                    <p style="line-height: 40px; text-align: center; margin: 10px 0;font-size:55px;color:#fcfcfc;font-family:'Arial,sans-serif"><b>${escapedHost}</b></p>
                </mj-text>
                <mj-text align="left" color="#55575d" font-family="Arial, sans-serif" font-size="13px" line-height="22px" padding-bottom="20px" padding-top="0px" padding="10px 25px">
                    <p style="line-height: 30px; text-align: center; margin: 10px 0;color:#f5f5f5;font-size:25px;font-family:'Times New Roman',Helvetica,Arial,sans-serif">
                        <span style="color:#ffffff;font-size:18px;font-family:'Times New Roman',Helvetica,Arial,sans-serif">
                            Sign in to
                            ${escapedEmail}
                        </span>
                    </p>
                </mj-text>
            </mj-column>
        </mj-section>
        <mj-section background-color="#000000" background-repeat="no-repeat" text-align="center" vertical-align="top" padding-bottom="40px" padding="0 0 0 0">
            <mj-column>
                <mj-button background-color="#ffffff" border-radius="3px" font-family="Times New Roman, Helvetica, Arial, sans-serif" font-size="18px" font-weight="normal" inner-padding="10px 25px" padding-bottom="30px" padding="10px 25px">
                    <span style="color:#212020">
                        <a href="${url}" target="_blank">
                            Sign in
                        </a>
                    </span>
                </mj-button>
                <mj-text align="left" color="#55575d" font-family="Arial, sans-serif" font-size="13px" line-height="22px" padding-bottom="0px" padding-top="5px" padding="10px 25px">
                    <p style="line-height: 16px; text-align: center; margin: 10px 0;font-size:12px;color:#ffffff;font-family:'Times New Roman',Helvetica,Arial,sans-serif">If you did not request this email you can safely ignore it.</p>
                </mj-text>
            </mj-column>
        </mj-section>
    </mj-body>
</mjml>
  `
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
function text({ url, host }) {
    return `Sign in to ${host}\n${url}\n\n`
}
