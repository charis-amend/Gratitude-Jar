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
                        className={styles.viewbox}>

                        <p
                            className="statement text-left place-self-start p-4 w-full h-full"
                        >{randomGratitudeStatement.statementText}</p>

                        <p
                            className="date-statement right-3 place-self-end text-xs pb-10  pr-3"
                        >{randomGratitudeStatement.dateCreation}</p>
                    </div >
                </div >
            </>
        )
    }
}