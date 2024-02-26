import dbConnect from "../../../../db/connect";
import GratitudeStatement from "../../../../db/models/GratitudeStatement";
import User from "../../../../db/models/User";

export default async function handler(req, res) {
    const { userId } = req.query;

    try {
        await dbConnect();
        const gratitudeStatements = await GratitudeStatement.find({ userId });
        res.status(200).json(gratitudeStatements);
    } catch (error) {
        console.error("Error in GET /api/gratitudeStatements/[userId].js  :", error);
        res.status(500).json({ status: "Internal Server Error" });
    }
}


// ---- this is in the GratitudeForm Component (this component is ssr + csr!!!)
// if (req.method === "POST") {
//     try {
//         await dbConnect();
//         const { statementText, dateCreation, userId } = req.body;
//         const newGratitudeStatement = await GratitudeStatement.create({ statementText, dateCreation, userId });
//         res.status(201).json({ success: true, data: newGratitudeStatement });
//     } catch (error) {
//         console.error("Error in POST /api/gratitudeStatements:", error);
//         res.status(500).json({ status: "Internal Server Error" });
//     }
// }


