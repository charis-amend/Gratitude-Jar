import dbConnect from "../../../db/connect";
import GratitudeStatement from "../../../db/models/GratitudeStatement";
import User from "../../../db/models/User";


export default async function handler(req, res) {
    await dbConnect();
    const { userId } = req.query;
    console.log("----- request.query in api/gratitudeStatements/[userId]:", req.query,
        "----- userId in api/gratitudeStatements/[userId]:", userId,
        "----- request.body in api/gratitudeStatements/[userId]:", req.body)

    if (!userId) {
        return res.status(400).json({ error: "User ID is undefined" });
    }

    // adding GratitudeStatement via GratitudeForm by the user === session.user.userId
    if (req.method === "POST") {
        try {
            const gratitudeStatementData = req.body;
            const newGratitudeStatement = await GratitudeStatement.create(gratitudeStatementData);
            res.status(201).json({ success: true, data: newGratitudeStatement });

            // const newGratitudeStatement = await GratitudeStatement.create(newGratitudeStatement);
            const userWithNewGratitudeStatement = await User.findById(userId);
            console.log("..................userWithNewGratitudeStatement:", userId)
            userWithNewGratitudeStatement.gratitudeStatements.push(newGratitudeStatement)
            await userWithNewGratitudeStatement.save()
            return res.status(201).json({ status: "added statement successfully" })
        } catch (error) {
            console.error("Error in POST /api/gratitudeStatements:", error);
            res.status(500).json({ status: "Internal Server Error" });
        }
    }

    // getting random GratitudeStatement with RandomGratitudeButton:
    if (req.method === "GET") {
        try {
            const user = await User.findById(userId).populate("gratitudeStatements")
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            } else {
                const gratitudeStatements = user.gratitudeStatements
                res.status(200).json(gratitudeStatements);
            }
        } catch (error) {
            console.error("Error in GET /api/gratitudeStatements/[userId].js  :", error);
            res.status(500).json({ status: "Internal Server Error" });
        }
    }


}


