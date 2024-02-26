import dbConnect from "../../../../db/connect";
import GratitudeStatement from "../../../../db/models/GratitudeStatement";
import User from "../../../../db/models/User";


export default async function handler(req, res) {
    await dbConnect();
    const { userId } = req.query;
    console.log("----- request.query in api/gratitudeStatements/[userId]:", req.query,
        "----- userId in api/gratitudeStatements/[userId]:", userId)

    if (!userId) {
        return res.status(400).json({ error: "User ID is undefined" });
    }

    if (req.method === "GET")
        try {
            const user = await User.findById(userId)
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            } else {
                const gratitudeStatements = await User.findById(userId)
                res.status(200).json(gratitudeStatements);
            }
        } catch (error) {
            console.error("Error in GET /api/gratitudeStatements/[userId].js  :", error);
            res.status(500).json({ status: "Internal Server Error" });
        }

    // adding GratitudeStatement via GratitudeForm by the user === session.user.userId
    if (req.method === "POST") {
        try {
            const { statementText, dateCreation, userId } = req.body;
            console.log("---- req.body in api endpoint in POST req:", req.body)
            const newGratitudeStatement = await GratitudeStatement.create({ statementText, dateCreation, userId });
            res.status(201).json({ success: true, data: newGratitudeStatement });
        } catch (error) {
            console.error("Error in POST /api/gratitudeStatements:", error);
            res.status(500).json({ status: "Internal Server Error" });
        }
    }

    // getting random GratitudeStatement with RandomGratitudeButton:
    //....

}
