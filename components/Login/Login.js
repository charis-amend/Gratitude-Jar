import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import Image from "next/image"
import { useEffect } from "react"


export default function Login() {
    // if data: session then...
    const { data: session, status } = useSession()
    const router = useRouter()
    if (session) {
        if (status === "loading") {
            return (
                <>
                    <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex flex-col justify-center items-center">
                        <h1 className="loading-heading text-center p-2 text-blue-50 align-middle mt-10">
                            Loading your jar ... 🫙
                        </h1>
                        <div className="img-div w-full, h-full relative">
                            <Image src="/imgGlasJar.png" alt="placeholder glasjar" layout='fill'
                                objectFit='contain' />
                        </div>
                    </div >
                </>)
        }
        useEffect(() => {

            if (status === "authenticated") {
                router.replace("/users-page") // lead user to UsersPage users-page.js
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
        }, [session, router])




    }

}






console.log("----- session in login component:", session)
const userAuthenticated = useSession(status === "authenticated")
console.log("----- user is authenticated in login component:", userAuthenticated)

if (session) {
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