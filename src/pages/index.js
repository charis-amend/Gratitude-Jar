// MAIN PAGE
// Styling with Tailwind in each Component
// no other subpages, components will display/hide according to user activity.
// -------------------------
// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import GratitudeStatement from "../../components/GratitudeStatement/GratitudeStatement";
import BlurryLayer from "../../components/BlurryLayer/BlurryLayer";
import DisplayFormButton from "../../components/DisplayFormButton/DisplayFormButton";
import CancelBackButton from "../../components/CancelBackButton/CancelBackButton";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
// -------------------------

export default function Home() {
  return (
    <>

      <div className="backgroundapp -z-50 top-0 left-0 fixed h-screen w-screen ">  {/* css gradient background: */}
        <GlassJar className="glassjar-spreading-page -z-50 top-0 left-0 fixed h-screen w-screen" />
        <div className="divParent flex flex-col justify-center items-center h-screen" > {/* Parent-div for flex-col layout */}
          <Login />
          {/* <Image src="/imgGlasJar.png" alt="placeholder glasjar" width={400} height={600} /> */}

          <DisplayFormButton />
          <GratitudeForm />
          <GratitudeStatement />
          <RandomGratitudeButton />

          <BlurryLayer />
          {/* -> only if GratitudeViewBox is active */}
          <CancelBackButton />
          {/* -> only if GratitudeViewBox is active */}
        </div >
      </div >
    </>
  )
}

Home.auth = true;
