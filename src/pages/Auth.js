import { useSession } from "next-auth/react"

export default function Auth({ children }) {
    const { status } = useSession({ required: true })
    // when required true then only status=loading or status=authenticated

    if (status === "loading") {
        return "Loading ... 🫙"
    }
    return children
}