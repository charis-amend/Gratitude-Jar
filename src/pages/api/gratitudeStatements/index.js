import dbConnect from "../../../../db/connect";
import GratitudeStatement from "../../../../db/models/GratitudeStatement";

export default async function handler(req, res) {
    try {
        await dbConnect();

        const gratitudeStatements = await GratitudeStatement.find();

        res.status(200).json(gratitudeStatements);
    } catch (error) {
        console.error("Error in GET /api/gratitudeStatements:", error);
        res.status(500).json({ status: "Internal Server Error" });

    }
}