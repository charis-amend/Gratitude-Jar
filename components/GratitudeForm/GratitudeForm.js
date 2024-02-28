import { useSession } from "next-auth/react"
import { useState } from "react";
import { useRouter } from "next/router";

export default function GratitudeForm({ onSubmit, dateFormSubmission, userIdForGratitudeStatement }) {
    const [showForm, setShowForm] = useState(false) // hide & show form with Add Gratitude Button
    const [showMaxLengthMessage, setShowMaxLengthMessage] = useState(false)
    const [submitted, setSubmitted] = useState(false);


    function submittingGratitudeForm(event) {
        event.preventDefault()
        const formData = new FormData(event.target);
        const gratitudeStatementData = Object.fromEntries(formData);
        onSubmit(gratitudeStatementData)
        event.target.reset() // reseting input to empty
        setShowForm(false) // hiding form again
        setSubmitted(true); // Show submitted message
        console.log("successfully submitted gratitude statement clientside and backendside // gratitudeStatementData:", gratitudeStatementData)

        setTimeout(() => {
            setSubmitted(false);
        }, 3000); // 3s
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
                className="displayformbutton text-white text-sm bg-SageGreen-jar w-40 font-bold py-2 px-2 rounded-md shadow-xl m-3 transition-colors duration-500 hover:bg-SageGreen-jar-hover transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                type="button"
                id="displayFormButton"
                name="displayFormButton"
                onClick={() => setShowForm(!showForm)}

            >Add Gratitude Memory</button>


            {showForm ?
                <form
                    className="form w-full max-w-sm transition-all duration-1000 delay-150 ease-in-out"
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
                            className="inputfield appearance-none bg-transparent border-none w-full text-blue-200 mr-3 py-1 px-2 leading-tight focus:outline-none disabled:border-red-300 transition-all duration-300 animate-fade-out"
                        />
                        <input type="hidden" value={dateFormSubmission} name="dateCreation" />
                        <button type="submit"
                            className="submit-button flex-shrink-0 bg-transparent hover:bg-gray-80 text-sm text-white py-1 px-2 rounded shadow transition-all duration-1000">
                            ADD
                        </button>

                    </div>



                    {showMaxLengthMessage ?
                        <p className="maxlength-message text-xs text-red-500 p-3"> 🫙 Please shorten your gratitude statement or add a new one. </p>
                        :
                        null
                    }

                </form >
                :
                null
            }
            {submitted ?
                <p className="submitted-message text-xs text-red-500 p-3 animate-fade-out ease-in-out duration-1000">
                    🫙 You added a gratitude memory!
                </p>
                : null
            }
        </>
    )
}

