import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../lib/mongodb"
import nodemailer from "nodemailer"

// different url when opening the verification-email: 
function emailSender(callbackUrl) {
  return async ({ identifier, url, provider: { server, from } }) => {
    try {
      const emailVerificationLink = new URL(url)
      emailVerificationLink.searchParams.set("/users-page", callbackUrl)
      await sendVerificationRequest({
        email: identifier,
        url: emailVerificationLink.href,
        provider: { server, from }
      }) {
        const { host } = new URL(url)
        const transport = nodemailer.createTransport(server)
        await transport.sendMail({
          to: email,
          from,
          subject: `Your Sign in | Gratitude Jar`,
          text: text({ url, host }),
          html: html({ url, host, email }),
        })
      }
    } catch (error) {
      console.error(error.message, "error in [nextAuth].js file whilst fetching callbackURL")
    }
  }
}

export default NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 30 * 24 * 60 * 60, // 30daays

      sendVerificationRequest: emailSender(),
      // async sendVerificationRequest({
      //   identifier: email,
      //   url,
      //   provider: { server, from },
      // }) {
      //   const { host } = new URL(url)
      //   const transport = nodemailer.createTransport(server)
      //   await transport.sendMail({
      //     to: email,
      //     from,
      //     subject: `Your Sign in | Gratitude Jar`,
      //     text: text({ url, host }),
      //     html: html({ url, host, email }),
      //   })
      // },
      // normalizing email-address, so not more than 1 address possible:
      normalizeIdentifier: function (identifier) {
        let [local, domain] = identifier.toLowerCase().trim().split("@")
        domain = domain.split(",")[0]  // removing , for the domain part
        return `${local}@${domain}`
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30days
  },
  callbacks: {
    async session({ session, user }) {
      session.user.userId = user.id;
      return session;
    },
  }
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

  // Some simple styling options
  const backgroundColor = "#232323"
  const textColor = "#444444"
  const mainBackgroundColor = "#ffffff"
  const buttonBackgroundColor = "#473AEB"
  const buttonBorderColor = "#346df1"
  const buttonTextColor = "#ffffff"

  return `
  <body style="background: ${backgroundColor};">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                  <tbody>
                    <tr>
                      <td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:30px;word-break:break-word;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                          <tbody>
                            <tr>
                              <td style="width:180px;">
                                <img height="auto" src="https://raw.githubusercontent.com/charis-amend/Gratitude-Jar/main/finaljarlogo.png" style="border:none;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" title="" width="180" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: #ffffff;">
          <strong>GRATITUDE JAR</strong>
        </td>
      </tr>
    </table>
    <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
      <tr>
        <td align="center" style="padding: 10px 0px 0px 0px; font-size: 13px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
          Sign in with your e-mail: ${escapedEmail}
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}">
              <a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">
              Sign in 
              </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
          If you did not request this email you can safely ignore it.
        </td>
      </tr>
    </table>
  </body>
  `
}

// Email Text body (fallback for email clients that don't render HTML, e.g. feature phones)
function text({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`
}