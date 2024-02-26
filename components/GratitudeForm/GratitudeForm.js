import { useSession } from "next-auth/react"
import { useState } from "react";
import { useRouter } from "next/router";

export default function GratitudeForm({ onSubmit, dateFormSubmission, userIdForGratitudeStatement }) {
    const [showForm, setShowForm] = useState(false) // hide & show form with Add Gratitude Button
    const [showMaxLengthMessage, setShowMaxLengthMessage] = useState(false)

    function submittingGratitudeForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const gratitudeStatementData = Object.fromEntries(formData);
        // onSubmit(gratitudeStatementData)
        event.target.reset() // reseting input to empty
        setShowForm(false) // hiding form again
        console.log("successfully submitted gratitude statement clientside and backendside // gratitudeStatementData:", gratitudeStatementData)
    }
    function handleCharacterCount(event) {
        const formTextInput = event.target.value;
        if (formTextInput.length >= 150) {
            setShowMaxLengthMessage(!showMaxLengthMessage);
        }
    }


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
                    onSubmit={submittingGratitudeForm}>
                    <div className="flex items-center border-b border-white py-2 bg-transparent">
                        <label htmlFor="formTextInput">
                        </label>
                        <input
                            name="statementText"
                            id="formTextInput"
                            placeholder="What are you grateful for...?"
                            maxLength={150}
                            onChange={handleCharacterCount}

                            required
                            className="inputfield appearance-none bg-transparent border-none w-full text-blue-200 mr-3 py-1 px-2 leading-tight focus:outline-none disabled:border-red-300"
                        />
                        <input type="hidden" value={dateFormSubmission} name="dateCreation" />
                        <input type="hidden" value={userIdForGratitudeStatement} name="userId" />

                        <button type="submit"
                            className="submit-button flex-shrink-0 bg-transparent hover:bg-gray-80 text-sm text-white py-1 px-2 rounded shadow">
                            ADD
                        </button>

                    </div>
                    {showMaxLengthMessage ?
                        <p className="maxlength-message text-xs text-red-500 p-3"> 🫙 Please shorten your gratitude statement or add a new one. </p>
                        :
                        null
                    }
                </form>
                :
                null
            }
        </>
    )
}
