'use client'
import Head from "next/head";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import GratitudeStatement from "../../components/GratitudeStatement/GratitudeStatement";
import DisplayFormButton from "../../components/DisplayFormButton/DisplayFormButton";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
// -------------------------

export default function UsersPage() {
    const router = useRouter()
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() { router.push("/") }
    })
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
    if (!session) { return null } // redirecting to index.js HOME page

    return (
        <>
            <Head>
                <title>🫙 Gratitude Jar</title>
            </Head>

            <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* background: */}
                <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1" />
                <div className="login-info-section z-5 fixed top-0.5 right-0.5 z-50 p-4 flex flex-col justify-end">
                    <Login />
                </div>

                <GratitudeStatement /> {/* viewbox for active displayed gratitude statement and blurry background: */}

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


