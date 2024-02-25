// import dbConnect from "../../../../db/connect";
// import GratitudeStatement from "../../../../db/models/GratitudeStatement";

// export default async function handler(req, res) {
//     try {
//         await dbConnect();

//         const gratitudeStatements = await GratitudeStatement.find()
//         res.status(200).json(gratitudeStatements)
//     } catch (error) {
//         console.error(".... error in api/gratitudeStatements request:", error)
//         res.status(400).json({ status: " gratitudeStatement.find() request didn't work" })
//     }
// }