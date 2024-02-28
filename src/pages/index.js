// MAIN PAGE
// Styling with Tailwind in each Component
// no other subpages, components will display/hide according to user activity.


// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
import SignInButton from "../../components/SignInButton/SignInButton";
// -------------------------
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());




export default function Home() {
  const { data: session, status } = useSession()
  const userId = session?.user?.userId
  const dateCreation = new Date().toDateString();
  const { mutate } = useSWR(userId ? `/api/${userId}` : null, fetcher);

  async function addingGratitudeStatement(gratitudeStatementData) {
    const response = await fetch(`/api/${userId}`, {
      method: "POST",
      body: JSON.stringify(gratitudeStatementData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      mutate();
    }
  }

  if (status === "authenticated") {
    return (
      <>
        <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
          <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1" />
          {/* image for the loading page showing this image before the 3D object has loaded  */}
          {/* <div className="image-container z-1 relative h-2/4 place-self-center">
            <Image
              priority
              src="/preloadedGlasJar.png"
              alt="placeholder-glasjar"
              width={500}
              height={500}
              sizes="90vw"
              style={{
                objectFit: 'cover',
              }}
            />
          </div> */}
          <div className="login-info-section z-5 fixed top-0.5 right-0.5 z-50 p-4 flex flex-col justify-end">
            <Login />
          </div>

          {/* lower section: */}
          <div className="lower-section fixed top-3/4 left-3.5 right-3.5  bottom-10 z-5 p-4 flex flex-col justify-center items-center">
            <GratitudeForm
              onSubmit={addingGratitudeStatement}
              userIdForGratitudeStatement={userId}
              dateFormSubmission={dateCreation}

            />
            <RandomGratitudeButton />

          </div>
        </div>
      </>
    )
  } else {
    // not signed in:
    return (
      <>
        <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
          <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1" />

          {/* lower section: */}
          <div className="lower-section fixed top-4/5 left-3.5 right-3.5  bottom-1 z-5 p-4 flex flex-col justify-center items-center">
            <SignInButton />
            <p
              className="statement text-center  w-2/3 text-xs p-2 text-blue-50 place-self-center h-full my-5"
            >
              Login here, to add your gratitude statements. We will only send you a link to your e-mail to log you in. None of your data will be processed.
            </p>

          </div >
        </div >
      </>
    )

  }
}

// Home.auth = true;
