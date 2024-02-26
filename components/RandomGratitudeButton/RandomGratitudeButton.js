import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function RandomGratitudeButton({ toggleShowStatementBox }) {
    const { session } = useSession()
    const { userId } = session.user?.userId
    const [randomStatement, setRandomStatement] = useState(null); // no random statement fetched yet

    async function gettingRandomMemory() {
        try {
            const response = await fetch(`/api/gratitudeStatements/${userId}`)
            const statements = await response.json()
            if (statements && statements.length > 0) {
                const randomIndex = Math.floor(Math.random() * statements.length);
                const randomStatement = statements[randomIndex];
                setRandomStatement(randomStatement);
                toggleShowStatementBox()
            }
        }
        catch (error) {
            console.error(error, "---error in fetching a random gratitude memory")
            return (
                <><button className="randombutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 " type="button" id="RandomGratitudeButton" disabled > Random Gratitude Memory  </button>
                    <p className="statement text-center text-xs p-2 text-blue-50 place-self-start h-full"> Please add a gratitude statement to your memories to get a random gratitude memory. </p>  </>
            )
        }
    }

    return (
        <>
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



