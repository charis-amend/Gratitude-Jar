import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
    const { data: session, status } = useSession()
    // if (status === "loading") { return <div>... Loading 🫙</div> }

    const currentStatusAuth = status
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