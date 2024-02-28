import { signIn } from "next-auth/react";

export default function SignInButton() {

    // if user is logged out it show this:
    return (
        <>
            {/* <p
                 className="signedin-text text-white text-xs w-fit text-center my-3">
                 Not signed in
             </p> */}
            <button type="button"
                onClick={() => signIn()}
                className="signout-button place-self-center text-white text-xl bg-SageGreen-jar w-4/12 border-1 rounded-2xl p-5 my-1 shadow-md">Sign In
            </button>
        </>
    )
}