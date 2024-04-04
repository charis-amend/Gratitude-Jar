import { useSession } from "next-auth/react"
import { useState } from "react"
import GratitudeStatementContainer from "../GratitudeStatementContainer/GratitudeStatementContainer"

export default function RandomGratitudeButton() {
    const { data: session } = useSession()
    const userId = session?.user?.userId
    const [randomGratitudeStatement, setRandomGratitudeStatement] = useState(null); // defining randomGratitudeStatement from the fetch from api endpoint
    const [showStatement, setShowStatement] = useState(false); // display/hides <GratitudeStatement /> Component
    const [showError, setShowError] = useState(false); // State variable for error handling

    async function gettingRandomStatement() {
        try {
            if (!userId) {
                console.error("User ID is not available.");
                // add useState() with "please try again" <p> beneath button
                return;
            }


            const response = await fetch(`/api/${userId}/`)
            if (!response.ok) {
                throw new Error(`Failed to fetch random statement: ${response.statusText}`);
            }
            const randomGratitudeStatement = await response.json()
            if (!randomGratitudeStatement) {
                throw new Error("Random gratitude statement is not available.");
            }

            setRandomGratitudeStatement(randomGratitudeStatement);
            console.log("--- inside if(response.ok) randomGratitudeStatement=", randomGratitudeStatement)
            setShowStatement(true)
            console.log("--- showStatement useState() = ", showStatement)
            //  setShowError(false)


        } catch (error) {
            setShowError(!showError)
            console.error("--- error in async gettingRandomStatement() try catch // RandomGratitudeButton.js: ", error)
        }
    }

    // Function to handle closing the GratitudeStatementContainer
    function handleClose() {
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
                className="randombutton text-white bg-Khaki-jar text-sm font-bold py-4 px-4 w-40 rounded-3xl shadow-xl m-2 transition-all duration-400 hover:bg-LightMint-jar hover:shadow-black focus:outline-none focus:ring-0 focus:shadow-outline active:bg-primary-700 active:shadow-black dark:shadow-black dark:hover:shadow-black dark:focus:shadow-black dark:active:shadow-black"


                type="button"
                id="RandomGratitudeButton"
                onClick={() => gettingRandomStatement()}>
                Gratitude Memory

            </button>

            {showError ?
                <p className="errormessage text-center text-xs p-2 mb-10 text-blue-50 place-self-center h-full"> Please add first a gratitude statement to your memories to get a random gratitude memory. </p>
                :
                null
            }
        </>
    )
}



