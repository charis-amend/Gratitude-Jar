import dbConnect from "../../../db/connect";
import GratitudeStatement from "../../../db/models/GratitudeStatement";
import User from "../../../db/models/User";
import { aggregate } from "mongoose";

export default async function handler(req, res) {
    await dbConnect();
    const { userId } = req.query;
    if (!userId) {
        return res.status(400).json({ error: "User ID is undefined" });
    }

    // adding GratitudeStatement via GratitudeForm by the user === session.user.userId
    if (req.method === "POST") {
        try {
            const gratitudeStatementData = req.body;
            const newGratitudeStatement = await GratitudeStatement.create(gratitudeStatementData);
            res.status(201).json({ success: true, data: newGratitudeStatement });

            const userWithNewGratitudeStatement = await User.findById(userId);
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
            // Use aggregation to fetch a random statement
            const randomStatement = await aggregate([
                { $match: { user: userId } }, // Filter by user ID
                { $sample: 1 }, // Select one random statement
            ]);

            if (randomStatement.length > 0) {
                res.status(200).json(randomStatement[0]); // Send the first (random) statement
            } else {
                res.status(200).json([]); // No statements found, return empty array
            }
        } catch (error) {
            console.error("Error in GET /api/gratitudeStatements/[userId].js:", error);
            res.status(500).json({ status: "Internal Server Error" });
        }
    }


}


