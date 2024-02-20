import { getCsrfToken } from "next-auth/react"
import { signIn } from "next-auth/react"

export default function signIn({ csrfToken }) {
    return (
        <form method="post" action="/api/auth/signin/email">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
                Please enter your email address to receive a link. You'll be able to use the gratitude jar then. 🫙
                <input type="email" id="email" name="email" />
            </label>
            <button type="submit">Sign in with Email</button>
        </form>
    )
}

export async function getServerSideProps(context) {
    const csrfToken = await getCsrfToken(context)
    return {
        props: { csrfToken },
    }
}