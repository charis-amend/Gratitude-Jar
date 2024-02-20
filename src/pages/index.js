import Login from "../../components/Login/Login";
import AppBackground from "../../components/AppBackground/AppBackground";
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
      <div className="divParent flex flex-col justify-center items-center h-screen">
        <AppBackground />
        <Login />

        {/* <GlassJar /> */}
        <Image src="/imgGlasJar.png" alt="placeholder glasjar" width={400} height={600} />

        <DisplayFormButton />
        <GratitudeForm />
        <GratitudeStatement />
        <RandomGratitudeButton />

        <BlurryLayer />
        {/* -> only if GratitudeViewBox is active */}
        <CancelBackButton />
        {/* -> only if GratitudeViewBox is active */}
      </div>
    </>
  )
}

Home.auth = true;
