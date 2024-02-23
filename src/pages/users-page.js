import { useSession } from "next-auth/react"

export default function UsersPage() {
    try {
        // if data: session then...
        const { data: session, status } = useSession()

        if (status === "loading") {
            // return "Loading ... 🫙"
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
        if (status === "authenticated") {
            return (







                
            )
        }



    } catch (error) {

    }



    return
}

// signOut()

// Client Side: Yes
// Server Side: No
// In order to logout, use the signOut() method to ensure the user ends back on the page they started on after completing the sign out flow. It also handles CSRF tokens for you automatically.

// It reloads the page in the browser when complete.

// import { signOut } from "next-auth/react"

// export default () => <button onClick={() => signOut()}>Sign out</button>

// Specifying a callbackUrl

// As with the signIn() function, you can specify a callbackUrl parameter by passing it as an option.

// e.g. signOut({ callbackUrl: 'http://localhost:3000/foo' })

// The URL must be considered valid by the redirect callback handler. By default, it requires the URL to be an absolute URL at the same host name, or you can also supply a relative URL starting with a slash. If it does not match it will redirect to the homepage. You can define your own redirect callback to allow other URLs.

// Using the redirect: false option

// If you pass redirect: false to signOut, the page will not reload. The session will be deleted, and the useSession hook is notified, so any indication about the user will be shown as logged out automatically. It can give a very nice experience for the user.

// TIP
// If you need to redirect to another page but you want to avoid a page reload, you can try: const data = await signOut({redirect: false, callbackUrl: "/foo"}) where data.url is the validated URL you can redirect the user to without any flicker by using Next.js's useRouter().push(data.url)