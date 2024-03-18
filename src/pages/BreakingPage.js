
import BreakingJar from "../../components/GlassJar/BreakingJar";

import { useState } from "react";
import Link from "next/link";

export default function BreakingPage() {
    // trigger for animation:
    const [clickState, setClickState] = useState(false); // Initial click state
    function handleClickBreak() {
        setClickState(!clickState); // Toggle the click state on click
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

                <div
                    onClick={handleClickBreak}
                    className="shatter-div z-40 top-0 left-0 fixed h-screen w-screen flex"
                >
                    <BreakingJar
                        // className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1"
                        clickState={clickState}
                    />
                </div>
            </div >

        </>)
}


