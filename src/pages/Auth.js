import { useSession } from "next-auth/react"

export default function Auth({ children }) {
    const { status } = useSession({ required: true })
    // when required true then only status=loading or status=authenticated

    if (status === "loading") {
        // return "Loading ... 🫙"
        return (
            <>
                <div className="backgroundapp z-0 top-0 left-0 fixed h-screen w-screen flex">
                    <h1 className="loading-heading text-center p-2 text-blue-50 align-middle mt-10">
                        "Loading your jar ... 🫙"
                    </h1>
                </div>
                `
            </>)
    }
    return children
}