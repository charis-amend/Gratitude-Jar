// MAIN PAGE
// Styling with Tailwind in each Component
// no other subpages, components will display/hide according to user activity.
// -------------- -----------
// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import GratitudeStatement from "../../components/GratitudeStatement/GratitudeStatement";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
import { useSession } from "next-auth/react";
import SignInButton from "../../components/SignInButton/SignInButton";
// -------------------------

export default function Home() {
  const { status } = useSession()

  if (status === "authenticated") {
    return (
      <>
        <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
          {/* <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1" /> */}
          {/* image for the loading page showing this image before the 3D object has loaded 
          <Image src="/imgGlasJar.png" alt="placeholder glasjar" width={400} height={600} /> */}
          <div className="login-info-section z-5 fixed top-0.5 right-0.5 z-50 p-4 flex flex-col justify-end">
            <Login />
          </div>
          {/* viewbox for active displayed gratitude statement and blurry background: */}
          <GratitudeStatement />
          {/* lower section: */}
          <div className="lower-section fixed top-3/4 left-3.5 right-3.5  bottom-10 z-5 p-4 flex flex-col justify-center items-center">
            <GratitudeForm />
            <RandomGratitudeButton />
          </div >
        </div >
      </>
    )
  } else {
    // not signed in:
    return (
      <>
        <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
          {/* <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1" /> */}
          {/* image for the loading page showing this image before the 3D object has loaded 
          <Image src="/imgGlasJar.png" alt="placeholder glasjar" width={400} height={600} /> */}
          {/* lower section: */}
          <div className="lower-section fixed top-3/4 left-3.5 right-3.5  bottom-10 z-5 p-4 flex flex-col justify-center items-center">
            <p
              className="statement text-center text-xs p-2 text-blue-50 place-self-start h-full"
            >
              Login here, to add your gratitude statements, so no one else can see them. We will only send you a link to your e-mail to log you in. None of your data will be processed.
            </p>
            <SignInButton />

          </div >
        </div >
      </>
    )

  }
}

// Home.auth = true;
