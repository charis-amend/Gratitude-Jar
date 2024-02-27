import { useState } from "react";

export default function GratitudeStatementContainer({ randomGratitudeStatement }) {

    if (!randomGratitudeStatement) {
        return null;
    }
    const [closeContainer, setCloseContainer] = useState(false)

    setCloseContainer(!closeContainer)

    if (!closeContainer) {
        return null;
    } else {
        return (
            <>
                <div className="viewbox z-10 top-10 m-3 my-60 p-3 right-5 left-5 fixed h-55 w-200 place-self-center flex flex-col items-center justify-between bg-slate-500/80 rounded-md shadow-white shadow-sm">
                    <button
                        type="button"
                        id="closeButton"
                        name="closeButton"
                        onClick={() => setCloseContainer()}
                        className="cancelButton top-4 right-4 place-self-end text-white/60 text-xs"
                    >
                        ⓧ
                    </button>

                    <p
                        className="statement text-left p-2 text-blue-50 place-self-start h-full"
                    >{randomGratitudeStatement.statementText}</p>

                    <p
                        className="date-statement bottom-1 right-3 place-self-end text-xs"
                    >{randomGratitudeStatement.dateCreation}</p>
                </div >
            </>
        )
    }
}