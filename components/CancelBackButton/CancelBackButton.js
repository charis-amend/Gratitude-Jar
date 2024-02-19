
export default function CancelBackButton({ hiddenStatementViewBox }) {
    <>
        {/* {
            if(!hiddenStatementViewBox) {
                display CancelBackButton<div></div>
            }
        } */}
        <button
            type="button"
            id="cancelButton"
            name="cancelButton"
            // onClick={}
            className="cancelButton absolute top-4 right-4 transition-all duration-200 text-3xl font-bold text-white hover:text-orange"
        >
            X
        </button>
    </>
}