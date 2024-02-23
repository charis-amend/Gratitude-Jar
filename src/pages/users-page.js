'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";
// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import GratitudeStatement from "../../components/GratitudeStatement/GratitudeStatement";
import DisplayFormButton from "../../components/DisplayFormButton/DisplayFormButton";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
// -------------------------

export default function UsersPage() {
    const { data: session, status } = useSession({ required: true, onUnauthenticated() { redirect("signin?callbackUrl=") } })
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
    } else {

        return (
            <>
                <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
                    <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1" />
                    {/* image for the loading page showing this image before the 3D object has loaded 
          <Image src="/imgGlasJar.png" alt="placeholder glasjar" width={400} height={600} /> */}
                    <div className="login-info-section z-5 fixed top-0.5 right-0.5 z-50 p-4 flex flex-col justify-end">
                        <Login />
                    </div>
                    {/* viewbox for active displayed gratitude statement and blurry background: */}
                    <GratitudeStatement />
                    {/* lower section: */}
                    <div className="lower-section fixed top-3/4 left-3.5 right-3.5  bottom-10 z-5 p-4 flex flex-col justify-center items-center">
                        <DisplayFormButton />
                        <GratitudeForm />
                        <RandomGratitudeButton />
                    </div >
                </div >

            </>
        )
    }
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