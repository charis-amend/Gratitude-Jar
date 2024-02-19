export default function GratitudeForm() {
    const { mutate } = useSWR("/api/jokes");
    const onGratitudeSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const gratitudeData = Object.fromEntries(formData);
        console.log("------ gratitudeData:", gratitudeData);
        const response = await fetch("/api/jokes", {
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
            <form onSubmit={(e) => onGratitudeSubmit(e)}>
                <label htmlFor="formTextInput">
                </label>
                <textarea
                    name="formStatementText"
                    id="formTextInput"
                    placeholder="What are you grateful for today...?"
                    autoFocus="true"
                    cols={10}
                    rows={7}
                    maxLength={150}
                    required
                ></textarea>
                <button type="submit">
                    ADD
                </button>
            </form>
        </>
    )
}