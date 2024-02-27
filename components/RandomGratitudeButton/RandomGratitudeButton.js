import { useSession } from "next-auth/react"
import { useState } from "react"
import GratitudeStatementContainer from "../GratitudeStatementContainer/GratitudeStatementContainer"

export default function RandomGratitudeButton() {
    const { data: session } = useSession()
    const userId = session.user.userId
    const [randomGratitudeStatement, setRandomGratitudeStatement] = useState(null); // defining randomStatement from the fetch from api endpoint
    const [showStatement, setShowStatement] = useState({ default: false }); // display/hides <GratitudeStatement /> Component
    const [showError, setShowError] = useState({ default: false }); // State variable for error handling

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
                setShowStatement(!showStatement)
            }

        } catch (error) {
            setShowError(!showError)
            console.error("error in RandomGratitudeButton.js: ", error)
        }
    }

    // Function to handle closing the GratitudeStatementContainer
    function handleClose() {
        setShowStatement(showStatement);
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
                className="randombutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-3 px-6 rounded-md shadow-lg my-5"
                type="button"
                id="RandomGratitudeButton"
                onClick={() => gettingRandomStatement()}>
                Get Random Gratitude Memory
            </button>
            {showError ? (<p className="errormessage text-center text-xs p-2 text-blue-50 place-self-start h-full"> Please add a gratitude statement to your memories to get a random gratitude memory. </p>) : null}
        </>
    )
}



