export default function GratitudeFormSection() {


    return (
        <>
            {/* DisplayFormButton: */}
            <button type="button" >
                Add Gratitude
            </button>
            {/* GratitudeForm: */}
            <form>
                <label htmlFor=""></label>
                <textarea name="formStatementText" id="formTextInput"></textarea>
                <button type="submit">
                    ADD
                </button>
            </form>
            <DisplayFormButton />
            <GratitudeViewBox />
            <RandomGratitudeButton />
        </>
    )
}