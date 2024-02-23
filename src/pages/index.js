// FIRST PAGE
// Styling with Tailwind in each Component
// -------------- -----------
import Head from "next/head";
import React from "react";
import Image from "next/image";
// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import { useSession } from "next-auth/react";
import SignInButton from "../../components/SignInButton/SignInButton";
// -------------------------

export default function Home() {

  const { data: session, status } = useSession()
  console.log("---data in index.js:", session, status)

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
  // if data is anything but session then show index.js Homepage:
  if (!session) {
    return (
      <>
        <Head>
          <title>🫙 Gratitude Jar</title>
        </Head>
        <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
          <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1" />
          {/* image for the loading page showing this image before the 3D object has loaded 
          <Image src="/imgGlasJar.png" alt="placeholder glasjar" width={400} height={600} /> */}
          {/* lower section: */}
          <div className="lower-section fixed top-3/4 left-3.5 right-3.5  bottom-10 z-5 p-4 flex flex-col justify-center items-center">
            <SignInButton /> {/* button leads directly to sign in next-auth page */}
            <p
              className="statement text-center text-xs p-2 text-blue-50 place-self-start h-full"
            >
              Login here, to add your gratitude statements, so no one else can see them. We will only send you a link to your e-mail to log you in. None of your data will be processed.
            </p>
          </div >
        </div >
      </>
    )
  }
}

