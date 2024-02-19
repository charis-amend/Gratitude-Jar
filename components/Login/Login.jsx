import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"

export default function Login() {
    const { data: session, status } = useSession()
    const router = useRouter()

    async function handleSignInAndDisplayLoginPage() {

        await signIn();
        router.push("/loggedInUser")
    }

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button type="button" onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button type="button"
                onClick={handleSignInAndDisplayLoginPage}
            >Sign in</button >
        </>
    )
}