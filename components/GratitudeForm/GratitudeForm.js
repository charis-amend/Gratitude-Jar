import { useSession } from "next-auth/react"

export default function GratitudeForm({ onGratitudeSubmit }) {

    // const { mutate } = useSWR()
    // const GratitudeSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const gratitudeData = Object.fromEntries(formData);
    //     console.log("------ gratitudeData:", gratitudeData);
    //     const response = await fetch("/api/jokes", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(jokeData),
    //     });
    //     if (response.ok) {
    //         mutate();
    //     }
    // };

    return (
        <>
            <form
                className="form w-full max-w-sm"
            // onSubmit={(e) => onGratitudeSubmit(e)}
            >
                <div className="flex items-center border-b border-white py-2 bg-transparent">
                    <label htmlFor="formTextInput">
                        <input
                            name="formStatementText"
                            id="formTextInput"
                            placeholder="What are you grateful for...?"
                            maxLength={150}
                            required
                            className="appearance-none bg-transparent border-none w-full text-blue-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        />
                    </label>
                    <button type="submit"
                        className="submit-button flex-shrink-0 bg-transparent hover:bg-gray-80 text-sm text-white py-1 px-2 rounded shadow">
                        ADD
                    </button>
                </div>
            </form >
        </>
    )
}
