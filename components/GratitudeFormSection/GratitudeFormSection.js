import useSWR from "swr";
import GratitudeStatement from "../GratitudeStatement/GratitudeStatement";
import GratitudeForm from "../GratitudeForm/GratitudeForm";

export default function GratitudeFormSection({ onGratitudeSubmit }) {

    return (
        <>
            {/* DisplayFormButton: */}
            <button type="button"
                id="displayFormButton"
                name="displayFormButton">
                Add Gratitude
            </button>

            <GratitudeForm onGratitudeSubmit={GratitudeSubmit} />
            <GratitudeStatement />

            {/* RandomGratitudeButton:  */}
            <button
                type="button"
                id="RandomGratitudeButton">
                Gratitude Memory
            </button>
        </>
    )
}