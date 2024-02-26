import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

import GratitudeStatement from "../GratitudeStatement/GratitudeStatement"

export default function RandomGratitudeButton() {
    const { session } = useSession()
    const userId = session?.user?.userId
    const [randomStatement, setRandomStatement] = useState(null); // no random statement fetched yet
    const [showStatement, setShowStatement] = useState(false);
    const [error, setError] = useState(null); // State variable for error handling

    function toggleShowStatementBox() {
        setShowStatement((prevStatus) => !prevStatus)
    }

    async function gettingRandomMemory() {
        try {
            if (!session) return; // Guard against undefined session
            const response = await fetch(`/api/gratitudeStatements/${userId}`)
            const statements = await response.json()
            if (statements && statements.length > 0) {
                const randomIndex = Math.floor(Math.random() * statements.length);
                const randomStatement = statements[randomIndex];
                setRandomStatement(randomStatement);
                toggleShowStatementBox()
            } else {
                setError("You have no gratitude statements. Please add a gratitude statement to get a random gratitude memory.")
            }
        }
        catch (error) {
            console.error(error, "---error in fetching a random gratitude memory")
            setError("You have no gratitude statements. Please add a gratitude statement to get a random gratitude memory.")
        }
    }

    return (
        <>
            {error && <p className="errormessage text-center text-xs p-2 text-blue-50 place-self-start h-full"> Please add a gratitude statement to your memories to get a random gratitude memory. </p>}
            {showStatement && randomStatement && (
                <GratitudeStatement gratitudeStatement={randomStatement} />
            )}
            <button
                className="randombutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 disabled:bg-blue-200
                text-white font-bold py-3 px-6 rounded-md shadow-lg my-5"
                type="button"
                id="RandomGratitudeButton"
                onClick={gettingRandomMemory}>
                Get Random Gratitude Memory
            </button>
        </>
    )
}



