export default function GratitudeForm({ onGratitudeSubmit }) {
    // const { mutate } = useSWR("/api/jokes");
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
                className="form w-5/6 "
            // onSubmit={(e) => onGratitudeSubmit(e)}
            >
                <div className="flex items-center border-b-2 border-white py-2 bg-transparent">
                    <label htmlFor="formTextInput">
                    </label>
                    <input
                        name="formStatementText"
                        id="formTextInput"
                        placeholder="What are you grateful for today...?"
                        maxLength={150}
                        required
                        className="input-field bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    ></input>
                </div>
                <button type="submit"
                    button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"  >
                    ADD
                </button>
            </form >
        </>
    )
}