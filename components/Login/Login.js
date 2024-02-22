import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
    const { data: session, status } = useSession()
    // if (status === "loading") { return <div>... Loading 🫙</div> }

    const currentStatusAuth = status
    console.log(currentStatusAuth)

    if (session) {
        return (
            <>
                <p className="signedin-text text-white text-xs w-fit text-right my-3">
                    Signed in as
                    <br />
                    {session.user.email}
                </p>
                <button type="button" onClick={() => signOut()}
                    className="signout-button place-self-end text-white text-xs bg-blue-950/70 w-fit border-1 rounded-xl py-2 px-3 my-1 shadow-md">Sign out</button>
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