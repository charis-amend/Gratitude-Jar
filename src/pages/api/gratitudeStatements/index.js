import dbConnect from "../../../../db/connect";
import GratitudeStatement from "../../../../db/models/GratitudeStatement";

export default async function handler(req, res) {
    try {
        await dbConnect()

        if (req.method === "GET") {
            const gratitudeStatements = await GratitudeStatement.find()
            return res.status(200).json(gratitudeStatements)
        } else {
            return res.status(405).json({ status: "GET method in /api/gratitudeStatement not possible" })
        }
    } catch (error) {
        console.error("---- error in handler /api/gratitudeStatement", error)
        return res.status(400).json({ error: error.message });
    }
}
