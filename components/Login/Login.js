import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"

export default function Login() {
    const { data: session, status } = useSession()
    if (status === "loading") { return <div>... Loading 🫙</div> }

    const router = useRouter()

    const currentStatusAuth = useSession(status === "authenticated")
    console.log(currentStatusAuth)

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
                onClick={() => signIn()}
            >Sign in</button >
        </>
    )
}