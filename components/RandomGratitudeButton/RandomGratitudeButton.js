import { useSession } from "next-auth/react"
import { useState } from "react"
import GratitudeStatementContainer from "../GratitudeStatementContainer/GratitudeStatementContainer"

export default function RandomGratitudeButton() {
    const { data: session } = useSession()
    const userId = session.user.userId
    const [randomStatement, setRandomStatement] = useState(null); // defining randomStatement from the fetch from api endpoint
    const [showStatement, setShowStatement] = useState(false); // display/hides <GratitudeStatement /> Component
    const [showError, setShowError] = useState(false); // State variable for error handling


    async function gettingRandomMemory() {
        try {
            const response = await fetch(`/api/${userId}`)
            const { data: randomStatement } = await response.json()
            console.log("data from api: (should be returning a single random statement", randomStatement) // logic for random object in array is ssr.

            if (data) {
                setRandomStatement(randomStatement);
                setShowStatement(!showStatement)
            } else {
                setShowError(!showError) // displays small hint that user should add statements first.
            }
        }
        catch (error) {
            setShowError(!showError)
            console.error("error in RandomGratitudeButton.js: ", error)
            response.status(404).json({ status: "Getting random GratitudeStatement not found!" })
        }
    }
    gettingRandomMemory();


    return (
        <>
            {showStatement ? null :
                <GratitudeStatementContainer gratitudeStatement={randomStatement} />
            }
            <button
                className="randombutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-3 px-6 rounded-md shadow-lg my-5"
                type="button"
                id="RandomGratitudeButton"
                onClick={gettingRandomMemory}>
                Get Random Gratitude Memory
            </button>
            {showError ? null : <p className="errormessage text-center text-xs p-2 text-blue-50 place-self-start h-full"> Please add a gratitude statement to your memories to get a random gratitude memory. </p>}
        </>
    )
}



