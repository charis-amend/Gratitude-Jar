import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"

export default function Login() {
    const { data: session, status } = useSession()
    if (status === "loading") { return <div>... Loading your jar 🫙</div> }
    console.log("----- session in login component:", session)
    const userAuthenticated = useSession(status === "authenticated")
    console.log("----- user is authenticated in login component:", userAuthenticated)

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
            <p
                className="signedin-text text-white text-xs w-fit text-right my-3">
                Not signed in
            </p>
            <button type="button"
                onClick={() => signIn()}
                className="signout-button place-self-end text-white text-xs bg-blue-950/70 w-fit border-1 rounded-xl py-2 px-3 my-1 shadow-md">Sign In
            </button>
        </>
    )
}