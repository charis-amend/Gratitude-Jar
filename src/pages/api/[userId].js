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

            const userGettingRandomStatement = await User.findById(userId);
            if (!userGettingRandomStatement) {
                return res.status(404).json({ error: "User not found" })
            }

            const countOfUsersStatements = userGettingRandomStatement.gratitudeStatements.length
            if (countOfUsersStatements === 0) {
                return res.status(404).json({ status: "User has no gratitudeStatements Error retrieving random statement." });
            }


            // Use AGGREGATION $UNWIND & $RAND to fetch a random statement
            // https://www.mongodb.com/docs/manual/reference/operator/aggregation/unwind/
            // https://www.mongodb.com/docs/manual/reference/operator/aggregation/rand/
            const randomStatementData = await userGettingRandomStatement.aggregate([
                // { $match: { _id: userId } }, // Match the user with the specified userId
                { $unwind: "$gratitudeStatements" }, // Unwind the gratitudeStatements array
                { $sample: { size: 1 } }, // Select one random gratitude statement
            ]).catch((error) => {
                console.error("Error in aggregation:", error);
            });
            console.log("------ randomStatement:", randomStatementData, "----------")




        } catch (error) {
            console.error("Error in GET /api/gratitudeStatements/[userId].js:", error);
            res.status(500).json({ status: "Internal Server Error" });
        }
    }
}


