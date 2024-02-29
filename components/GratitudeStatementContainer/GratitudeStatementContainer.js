import { useState } from "react";
import styles from "./GratitudeStatementContainer.module.css";

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
                        className={`${styles.statementBox}`}>

                        {/* <button
                            type="button"
                            id="closeButton"
                            name="closeButton"
                            onClick={handleClose}
                            className="cancelButton top-4 right-4 pr-3 pt-3 place-self-end text-white/60 text-lg"
                        >
                            ⓧ
                        </button> */}

                        <p
                            className="statement text-left place-self-start pl-5 pb-4 pt-5 h-full"
                        >{randomGratitudeStatement.statementText}</p>

                        <p
                            className="date-statement right-3 place-self-end text-xs pb-10  pr-3"
                        >{randomGratitudeStatement.dateCreation}</p>
                    </div >
                </div>
            </>
        )
    }
}