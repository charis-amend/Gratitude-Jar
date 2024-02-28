import { useState } from "react";

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
                    <div style={{
                        zIndex: "10",
                        margin: "3px",
                        marginTop: "60px",
                        padding: "3px",
                        position: "fixed",
                        right: "50px",
                        left: "50px",
                        bottom: "250px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(147, 140, 129, 0.9)",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
                        transition: "opacity 1s", // Changed duration to 2s
                        opacity: !showViewBox ? 1 : 0,
                        transitionDelay: !showViewBox ? "0.5s" : "0" // Delay the transition if fading out
                    }}>
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