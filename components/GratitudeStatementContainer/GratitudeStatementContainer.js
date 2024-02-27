
export default function GratitudeStatementContainer({ randomGratitudeStatement }) {

    return (
        <>
            <div className="viewbox z-10 top-18 m-3 my-60 p-3 right-5 left-5 fixed h-55 w-200 place-self-center flex flex-col items-center justify-between bg-slate-500/80 rounded-md shadow-white shadow-sm">
                <button
                    type="button"
                    id="cancelButton"
                    name="cancelButton"
                    // onClick={}
                    className="cancelButton top-4 right-4 place-self-end text-white/60 text-sm"
                >
                    ⓧ
                </button>

                <p
                    className="statement text-left p-2 text-blue-50 place-self-start h-full"
                >{randomGratitudeStatement.statementText}</p>

                <p
                    className="date-statement bottom-1 right-3 place-self-end"
                >{randomGratitudeStatement.dateCreation}</p>
            </div >
        </>
    )
}