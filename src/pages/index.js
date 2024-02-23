'use client'
// FIRST PAGE
// Styling with Tailwind in each Component
// -------------- -----------
import Head from "next/head";
import React from "react";
// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
// import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
// import GratitudeStatement from "../../components/GratitudeStatement/GratitudeStatement";
import DisplayFormButton from "../../components/DisplayFormButton/DisplayFormButton";
import { useSession } from "next-auth/react";
import Link from "next/link";
// import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
// -------------------------

export default function Home() {


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
          {/* display a button here which leads to the signin page */}
          <Link
            href={"/users-page"}>
            <button
              type="button"
              className="displayformbutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 disabled:bg-blue-200
                text-white font-bold py-3 px-6 rounded-md shadow-lg my-5"
              id="button-opening-signin-page"
              name="button-opening-signin-page"
            >
              Add Gratitude Memory
            </button>
          </Link>
          <p
            className="statement text-left p-2 text-blue-50 place-self-start h-full"
          >
            Login here, to add your gratitude statements, so no one else can see them. We will only send you a link to your e-mail to log you in. None of your data will be processed.
          </p>


        </div >
      </div >
    </>
  )
}

