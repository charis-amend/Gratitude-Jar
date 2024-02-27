import { AlwaysCompare } from "three";
import dbConnect from "../../../db/connect";
import GratitudeStatement from "../../../db/models/GratitudeStatement";
import User from "../../../db/models/User";
import { Aggregate } from "mongoose";


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
            // Use AGGREGATION $MATCH & $RAND to fetch a random statement
            // https://www.mongodb.com/docs/manual/reference/operator/aggregation/match/
            // https://www.mongodb.com/docs/manual/reference/operator/aggregation/rand/

            const userGettingRandomStatement = await User.findById(userId)
            const countOfUsersStatements = userGettingRandomStatement.gratitudeStatements.length
            console.log("----- countOfStatements:", countOfUsersStatements, "-----")

            const randomStatement = await GratitudeStatement.aggregate([
                { $match: { _id: userId } }, // Match the user with the specified userId
                { $unwind: "$gratitudeStatements" }, // Unwind the gratitudeStatements array
                { $sample: { size: 1 } }, // Select one random gratitude statement
                console.log("------ randomStatement:", randomStatement, "----------")
            ]).catch((error) => {
                console.error("Error in aggregation:", error);
                res.status(400).json({ status: "Error retrieving random statement." }); // More specific error response
            });

            // {
            //     if (countOfStatements > 0) {
            //         res.status(200).json({ status: "Statements exist and random Statement was selected." }); // Send the first (random) statement
            //     } else {


        } catch (error) {
            console.error("Error in GET /api/gratitudeStatements/[userId].js:", error);
            res.status(500).json({ status: "Internal Server Error" });
        }
    }
}


