import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import Image from "next/image";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import GratitudeStatement from "../../components/GratitudeStatement/GratitudeStatement";
import BlurryLayer from "../../components/BlurryLayer/BlurryLayer";
import DisplayFormButton from "../../components/DisplayFormButton/DisplayFormButton";
import CancelBackButton from "../../components/CancelBackButton/CancelBackButton";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";


export default function Home() {
  return (
    <>

      <div className="backgroundapp -z-50 top-0 left-0 fixed h-screen w-screen ">

      </div >
      <div className="divParent flex flex-col justify-center items-center h-screen" >
        <Login />

        <GlassJar />
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
    </>
  )
}

Home.auth = true;
