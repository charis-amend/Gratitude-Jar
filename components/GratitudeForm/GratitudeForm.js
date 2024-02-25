import { useSession } from "next-auth/react"
import { useState } from "react";

export default function GratitudeForm({ onGratitudeSubmit }) {
    const { data: session } = useSession() // getting the userId to add the gratitudeStatement to the correct user
    console.log("----------session object in gratitudeform:", session)
    const [showForm, setShowForm] = useState(false) // hide & show form with Add Gratitude Button

    async function addingGratitude(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const { dateCreation, statementText } = Object.fromEntries(formData);

        const newGratitudeData = {
            dateCreation,
            statementText,
        }
        console.log("------ gratitudeData:", newGratitudeData);

        const response = await fetch(`/api/users/${userId}`, {
            method: "POST",
            body: JSON.stringify(newGratitudeData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            await response.json()
            event.target.reset() // reseting input to empty
            setShowForm(false)
        } else {
            console.error(`---- Error in GratitudeForm: ${response.status}`)
        }
    };

    return (
        <>
            <button
                className="displayformbutton bg-blue-700 hover:bg-v-blue-200 active:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-3 px-6 rounded-md shadow-lg my-5"
                type="button"
                id="displayFormButton"
                name="displayFormButton"
                onClick={() => setShowForm(!showForm)}
            >
                Add Gratitude Memory
            </button>
            {showForm ?
                <form
                    className="form w-full max-w-sm"
                    onSubmit={addingGratitude}
                    showForm={false}
                >
                    <div className="flex items-center border-b border-white py-2 bg-transparent">
                        <label htmlFor="formTextInput">
                        </label>
                        <input
                            name="formStatementText"
                            id="formTextInput"
                            placeholder="What are you grateful for...?"
                            maxLength={150}
                            required
                            className="appearance-none bg-transparent border-none w-full text-blue-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        ></input>
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
