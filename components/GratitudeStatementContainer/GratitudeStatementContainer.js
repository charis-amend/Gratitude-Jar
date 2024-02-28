import { useState } from "react";
import classes from "./GratitudeStatementContainer.module.scss"

export default function GratitudeStatementContainer({ randomGratitudeStatement, onClose }) {
    const [closeContainer, setCloseContainer] = useState(false)
    const [showViewBox, setShowViewBox] = useState(false);


    if (!randomGratitudeStatement) {
        return null;
    }

    const handleClose = () => {
        setCloseContainer(!closeContainer); // Toggle the state when the close button is clicked
        onClose();
    };


    if (closeContainer) {
        return null;
    } else {
        return (
            <>
                <div className="outside-viewbox z-0 top-0 left-0 fixed h-screen w-screen flex"
                    onClick={handleClose}>
                    <div
                        className="viewbox">

                        <button
                            type="button"
                            id="closeButton"
                            name="closeButton"
                            onClick={handleClose}
                            className="cancelButton top-4 right-4 place-self-end text-white/60 text-xs"
                        >
                            ⓧ
                        </button>

                        <p
                            className="statement text- text-center p-2 text-blue-50 place-self-start h-full"
                        >{randomGratitudeStatement.statementText}</p>

                        <p
                            className="date-statement bottom-1 right-3 place-self-end text-xs"
                        >{randomGratitudeStatement.dateCreation}</p>
                    </div >
                </div>
            </>
        )
    }
}