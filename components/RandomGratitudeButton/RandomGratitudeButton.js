import { useSession } from "next-auth/react"
import { useState } from "react"
import GratitudeStatementContainer from "../GratitudeStatementContainer/GratitudeStatementContainer"

export default function RandomGratitudeButton() {
    const { data: session } = useSession()
    const userId = session.user.userId
    const [randomGratitudeStatement, setRandomGratitudeStatement] = useState(null); // defining randomStatement from the fetch from api endpoint
    const [showStatement, setShowStatement] = useState(false); // display/hides <GratitudeStatement /> Component
    const [showError, setShowError] = useState(false); // State variable for error handling

    async function gettingRandomStatement() {
        try {
            const response = await fetch(`/api/${userId}/`)
            const randomGratitudeStatement = await response.json()
            console.log("data from api: (should be returning a single random statement", randomGratitudeStatement) // logic for random object in array is ssr.


            if (!response.ok || !randomGratitudeStatement) {  // Check for errors or empty response
                console.error("Error fetching random statement:", response);
                setShowError(!showError);
                return;
            }

            if (randomGratitudeStatement) {
                setRandomGratitudeStatement(randomGratitudeStatement);
                toggleStatementBox()
            }

        } catch (error) {
            setShowError(!showError)
            console.error("error in RandomGratitudeButton.js: ", error)
        }
    }

    // Function to handle closing the GratitudeStatementContainer
    function toggleStatementBox() {
        setShowStatement(false);
        setRandomGratitudeStatement(null); // resets the randomGratitudeStatement state when closing
    }


    return (
        <>
            {showStatement && randomGratitudeStatement ? (
                <GratitudeStatementContainer
                    randomGratitudeStatement={randomGratitudeStatement}
                    onClose={handleClose}
                />) : null}
            <button
                className="randombutton text-white bg-Khaki-jar text-sm font-bold py-4 px-4 rounded-md shadow-xl m-5 transition-all duration-400 hover:bg-LightMint-jar hover:shadow-black focus:outline-none focus:ring-0 focus:shadow-outline active:bg-primary-700 active:shadow-black dark:shadow-black dark:hover:shadow-black dark:focus:shadow-black dark:active:shadow-black"

                type="button"
                id="RandomGratitudeButton"
                onClick={() => gettingRandomStatement()}>
                Random Gratitude
            </button>
            {/* {showError ? null : (<p className="errormessage text-center text-xs p-2 text-blue-50 place-self-start h-full"> Please add a gratitude statement to your memories to get a random gratitude memory. </p>)} */}
        </>
    )
}



