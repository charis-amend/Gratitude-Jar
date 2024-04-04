import BreakingJar from "../../components/GlassJar/BreakingJar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BreakingPage() {
    const [glassJarState, setGlassJarState] = useState(false); // Initial glassJarState is false=unshattered
    const [lidFlyingState, setLidFlyingState] = useState(false); // initial lidFlyingState is false = NOT Flying!

    // trigger for both animations:
    function handleClickBreak() {
        setGlassJarState(!glassJarState);
        setLidFlyingState(!lidFlyingState);
    };

    return (
        <>
            <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">
                <Link
                    href="/"
                >
                    <div className="back-button-section z-50 fixed top-5 left-1 h-10 inset-1/4 w-1/6 flex justify-center items-center"
                    >
                        <button
                            className="backbutton button place-self-end text-lg w-fit border-1 rounded-xl py-2 px-3 my-1 shadow-xl border-2 border-Grey-jar transition-all duration-400"
                        >🔙</button>
                    </div>
                </Link >

                <BreakingJar
                    glassJarState={glassJarState}
                    lidFlyingState={lidFlyingState}
                />

                <div className="lower-section fixed top-3/4 left-3.5 right-3.5  bottom-1 z-5 p-4 flex flex-col justify-center items-center">

                    {
                        !glassJarState && !lidFlyingState ?
                            (<button
                                className="triggerbutton bg-transparent text-5xl font-bold p-4 w-40 m-2"
                                type="button"
                                id="RandomGratitudeButton"
                                onClick={handleClickBreak}>
                                🔨
                            </button>)
                            :
                            (<button
                                className="triggerbutton bg-transparent text-5xl font-bold p-4 m-2"
                                type="button"
                                id="RandomGratitudeButton"
                                onClick={handleClickBreak}>
                                🪄

                            </button>)

                    }
                </div>
            </div >

        </>)
}



