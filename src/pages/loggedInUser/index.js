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