// MAIN PAGE
// Styling with Tailwind in each Component
// no other subpages, components will display/hide according to user activity.
// -------------- -----------
// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import GratitudeStatement from "../../components/GratitudeStatement/GratitudeStatement";
import DisplayFormButton from "../../components/DisplayFormButton/DisplayFormButton";
import CancelBackButton from "../../components/CancelBackButton/CancelBackButton";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
// -------------------------

export default function Home() {
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
        <div className="viewbox z-10 top-20 m-10 my-60 right-5 bottom-20 left-5 fixed h-auto w-auto place-self-center flex flex-col justify-center items-center bg-slate-500/70 shadow-white shadow-sm">
          <CancelBackButton />
          <GratitudeStatement />
        </div>

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

Home.auth = true;
