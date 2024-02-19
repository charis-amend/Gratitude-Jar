import Login from "../../../components/Login/Login"
import AppBackground from "../../../components/AppBackground/AppBackground"
import BlurryLayer from "../../../components/BlurryLayer/BlurryLayer"
import CancelBackButton from "../../../components/CancelBackButton/CancelBackButton"
import GlassJarSection from "../../../components/GlassJarSection/GlassJarSection"
import GratitudeFormSection from "../../../components/GratitudeFormSection/GratitudeFormSection"

export default function LoggedInUserPage() {
    return (
        <>
            <Login />
            {/* -> shows logged in user */}

            <AppBackground />

            <BlurryLayer />
            {/* -> only if GratitudeViewBox is active */}
            <CancelBackButton />
            {/* -> only if GratitudeViewBox is active */}

            <GlassJarSection />
            <GratitudeFormSection />
        </>
    )
}