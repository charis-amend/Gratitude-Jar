import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import GratitudeStatement from "../GratitudeStatement/GratitudeStatement"

export default function RandomGratitudeButton() {
    const { data: session } = useSession()
    const userId = session.user.userId
    const [randomStatement, setRandomStatement] = useState(null); // no random statement fetched yet
    const [showStatement, setShowStatement] = useState(false);
    const [error, setError] = useState(null); // State variable for error handling

    function toggleShowStatementBox() {
        setShowStatement((prevStatus) => !prevStatus)
        console.log("---random gratitude button:", setShowStatement())
    }
    useEffect(() => {
        async function gettingRandomMemory() {
            try {
                const response = await fetch(`/api/${userId}`)
                const data = await response.json()
                console.log("data from api:", data)
                if (data && data.length > 0) {
                    const randomIndex = Math.floor(Math.random() * data.length);
                    const randomStatement = data[randomIndex];
                    setRandomStatement(randomStatement, () => { toggleShowStatementBox() });
                    console.log("randomStatement", randomStatement)

                } else if (data.length < 1) {
                    setError("You have no gratitude statements. Please add a gratitude statement to get a random gratitude memory.")
                }
            }
            catch (error) {
                setError("You have no gratitude statements. Please add a gratitude statement to get a random gratitude memory.")
                console.error("error in randomgratitudebutton.js in gettingRandomMemory", error)
            }
        }
        gettingRandomMemory();
    }, [])

    return (
        <>
            {error && <p className="errormessage text-center text-xs p-2 text-blue-50 place-self-start h-full"> Please add a gratitude statement to your memories to get a random gratitude memory. </p>}
            {showStatement && randomStatement && (
                <GratitudeStatement gratitudeStatement={randomStatement} />
            )}
            <button
                className="randombutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-3 px-6 rounded-md shadow-lg my-5"
                type="button"
                id="RandomGratitudeButton"
                onClick={() => gettingRandomMemory}>
                Get Random Gratitude Memory
            </button>
        </>
    )
}



