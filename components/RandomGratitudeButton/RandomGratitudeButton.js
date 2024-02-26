import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export default function RandomGratitudeButton() {
    const { session } = useSession()
    const { userId } = session.user?.userId

    async function gettingRandomMemory() {
        try {


        }
        catch (error) {

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



