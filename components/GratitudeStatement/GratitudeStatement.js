export default function GratitudeStatement() {

    return (
        <>
            <div className="parentstatement z-11 flex flex-col">
                <button
                    type="button"
                    id="cancelButton"
                    name="cancelButton"
                    // onClick={}
                    className="cancelButton top-4 right-4"
                >
                    ❌
                </button>
                <p
                    className="date-statement top-0 right-0 place-self-end"
                >01/01/2024</p>
                <p
                    className="statement text-left m-10 p-5 justify-around"
                >Gratitude Statement</p>
            </div>
        </>
    )
}