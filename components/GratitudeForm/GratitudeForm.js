import { useSession } from "next-auth/react"

export default function GratitudeForm({ onGratitudeSubmit }) {
    const { status, data: session } = useSession()
    console.log("----------session object in gratitudeform:", session)

    if (status === "authenticated") {
        // if user is authenticated, then input is possible

        const addingGratitude = async (event) => {
            e.preventDefault();
            const formData = new FormData(event.target);
            const { dateCreation, statementText } = Object.fromEntries(formData);

            const newGratitudeData = {
                dateCreation,
                statementText,
                userId: session.user.userId,
            }
            console.log("------ gratitudeData:", newGratitudeData);

            const response = await fetch("/api/gratitudeStatements", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jokeData),
            });
            if (response.ok) {
                mutate();
            }
        };

        return (
            <>
                <form
                    className="form w-full max-w-sm"
                    onSubmit={addingGratitude}
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
                </form >
            </>
        )
    }
}