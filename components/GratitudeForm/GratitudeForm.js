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
            // onSubmit={(e) => onGratitudeSubmit(e)}
            >
                <div className="flex items-center border-b border-teal-500 py-2">
                    <label htmlFor="formTextInput">
                    </label>
                    <input
                        name="formStatementText"
                        id="formTextInput"
                        placeholder="What are you grateful for today...?"
                        maxLength={150}
                        required
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    ></input>
                </div>
                <button type="submit"
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" >
                    ADD
                </button>
            </form >
        </>
    )
}