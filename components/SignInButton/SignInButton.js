import { signOut, signIn, useSession } from "next-auth/react";

export default function SignInButton() {
    const { data: session } = useSession();

    if (session) {
        // if user has successfully logged in - component shows this:
        return (
            <>
                {/* <p className="signedin-text text-white text-xs w-fit text-right my-3">
                    Signed in as
                    <br />
                    {session.user.email}
                </p> */}
                <button type="button" onClick={() => signOut()}
                    className="signout-button place-self-end text-white text-xs bg-blue-950/70 w-fit border-1 rounded-xl py-2 px-3 my-1 shadow-md">Sign out</button>
            </>
        )
    }
    // if user is logged out it show this:
    return (
        <>
            {/* <p
                className="signedin-text text-white text-xs w-fit text-right my-3">
                Not signed in
            </p> */}
            <button type="button"
                onClick={() => signIn()}
                className="signout-button place-self-end text-white text-xs bg-blue-950/70 w-fit border-1 rounded-xl py-2 px-3 my-1 shadow-md">Sign In
            </button>
        </>
    )
}
