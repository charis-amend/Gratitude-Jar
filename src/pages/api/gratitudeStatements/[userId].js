import dbConnect from "../../../../db/connect";
import GratitudeStatement from "../../../../db/models/GratitudeStatement";
import User from "../../../../db/models/User";


export default async function handler(req, res) {
    await dbConnect();
    const { userId } = req.query;
    console.log("----- request.query in api/users/[userId]:", request.query,
        "----- userId in api/users/[userId]:", userId)

    if (req.method === "GET")
        try {
            const gratitudeStatements = await User.findById({ userId }).populate("gratitudeStatements")
            res.status(200).json(gratitudeStatements);
        } catch (error) {
            console.error("Error in GET /api/gratitudeStatements/[userId].js  :", error);
            res.status(500).json({ status: "Internal Server Error" });
        }

    // adding GratitudeStatement via GratitudeForm by the user === session.user.userId
    if (req.method === "POST") {
        try {
            const { statementText, dateCreation, userId } = req.body;
            console.log(req.body)
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
