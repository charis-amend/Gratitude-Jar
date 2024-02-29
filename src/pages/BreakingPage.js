import BreakingJar from "../../components/GlassJar/BreakingJar"

export default function BreakingPage() {
    return (
        <>
            <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">  {/* css gradient background: */}
                <BreakingJar
                    className="glassjar-spreading-page top-0 left-0 fixed h-screen w-screen z-1"
                />
            </div>

        </>)
}