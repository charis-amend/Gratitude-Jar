import { useSession } from "next-auth/react"
import { useState } from "react";
import { useRouter } from "next/router";

export default function GratitudeForm({ onSubmit }) {
    const { data: session } = useSession()
    const [showForm, setShowForm] = useState(false) // hide & show form with Add Gratitude Button
    const router = useRouter()

    async function addingGratitudeStatement(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { statementText } = Object.fromEntries(formData);
        const gratitudeStatementData = {
            statementText,
            dateCreation: new Date().toDateString(),
            userId: session?.user?.userId,
        }
        console.log("------ gratitudeData:", gratitudeStatementData);


        // this component GratitudeForm.js is ssr + csr!!! the POST is not in the /api/gratitudeStatement 
        try {
            const response = await fetch(`/api/gratitudeStatements/${gratitudeStatementData.userId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gratitudeStatementData),
            });

            console.log(response);

            const data = await response.json();

            if (data.success) {
                router.push("/");
            }
        } catch (error) {
            console.error("----- error in GratitudeForm:", error);
        }
        event.target.reset() // reseting input to empty
        setShowForm(false) // hiding form again
    }
    // onSubmit(addingGratitudeStatement);
    return (
        <>
            <button
                className="displayformbutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-3 px-6 rounded-md shadow-lg my-5"
                type="button"
                id="displayFormButton"
                name="displayFormButton"
                onClick={() => setShowForm(!showForm)}
            >Add Gratitude Memory</button>


            {showForm ?
                <form
                    className="form w-full max-w-sm"
                    onSubmit={addingGratitudeStatement}>
                    <div className="flex items-center border-b border-white py-2 bg-transparent">
                        <label htmlFor="formTextInput">
                        </label>
                        <input
                            name="statementText"
                            id="formTextInput"
                            placeholder="What are you grateful for...?"
                            maxLength={150}
                            required
                            className="appearance-none bg-transparent border-none w-full text-blue-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        />
                        <button type="submit"
                            className="submit-button flex-shrink-0 bg-transparent hover:bg-gray-80 text-sm text-white py-1 px-2 rounded shadow">
                            ADD
                        </button>
                    </div>
                </form>
                :
                null
            }
        </>
    )
}
