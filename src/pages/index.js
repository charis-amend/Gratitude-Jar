// MAIN PAGE
// Styling with Tailwind in each Component
// no other subpages, components will display/hide according to user activity.


// Components:
import Login from "../../components/Login/Login";
import GlassJar from "../../components/GlassJar/GlassJar";
import GratitudeForm from "../../components/GratitudeForm/GratitudeForm";
import RandomGratitudeButton from "../../components/RandomGratitudeButton/RandomGratitudeButton";
import SignInButton from "../../components/SignInButton/SignInButton";
import Arrows from "../../components/Arrows/Arrows";
// -------------------------
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
import { useState } from "react";
const fetcher = (url) => fetch(url).then((res) => res.json());



export default function Home() {
  const { data: session, status } = useSession()
  const userId = session?.user?.userId
  const dateCreation = new Date().toDateString();
  const { mutate } = useSWR(userId ? `/api/${userId}` : null, fetcher);

  const [animatePaper, setAnimatePaper] = useState(false); // state of animation
  function triggerAnimationPaper() {
    setAnimatePaper(true)
  }
  async function addingGratitudeStatement(gratitudeStatementData) {
    const response = await fetch(`/api/${userId}`, {
      method: "POST",
      body: JSON.stringify(gratitudeStatementData),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      mutate(); // add data to database
      triggerAnimationPaper(); // doing animation glassjar.js component
    }
  }

  if (status === "authenticated") {
    return (
      <>
        <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
          <GlassJar
            className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1"
            animatePaper={animatePaper}
          />
          <div className="login-info-section z-5 fixed top-0.5 right-0.5 z-50 p-4 flex flex-col justify-end">
            <Login />
          </div>

          <div className="arrows-section z-50 fixed top-1/3 left-1/2 h-10 inset-1/4 w-1/6 flex justify-center items-center">
            <Arrows />
          </div>
          {/* lower section: */}

          <div className="lower-section fixed top-3/4 left-3.5 right-3.5  bottom-1 z-5 p-4 flex flex-col justify-center items-center">
            <RandomGratitudeButton />
            <GratitudeForm
              onSubmit={addingGratitudeStatement}
              userIdForGratitudeStatement={userId}
              dateFormSubmission={dateCreation}
              triggerAnimationPaper={triggerAnimationPaper}
            />

          </div>
        </div>
      </>
    )
  } else {
    // not signed in:
    return (
      <>
        <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
          <GlassJar className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1"
          />
          <div className="arrows-section z-50 fixed top-1/3 left-1/2 h-10 inset-1/4 w-1/6 flex justify-center items-center">
            <Arrows />
          </div>

          {/* lower section: */}
          <div className="lower-section fixed top-4/5 left-3.5 right-3.5  bottom-1 z-5 p-4 flex flex-col justify-center items-center">
            <SignInButton />
            <p
              className="statement text-center w-11/12 text-xs p-2 text-blue-50  place-self-center h-full mt-5"
            >
              Login here, to add your gratitude statements. We will only send you a link to your e-mail to log you in. None of your data will be processed.
            </p>

          </div >
        </div >
      </>
    )

  }
}