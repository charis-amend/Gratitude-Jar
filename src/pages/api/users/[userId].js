// import dbConnect from "../../../../db/connect";
// import User from "../../../../db/models/User";
// import GratitudeStatement from "../../../../db/models/GratitudeStatement";

// // getting only the gratitudeStatements from the loggedInUser 
// export default async function handler(request, response) {
//     await dbConnect();
//     const { userId } = request.query
//     console.log("----- request.query in api/users/[userId]:", request.query)

//     try {
//         const gratitudeStatements = await User.findById(userId).populate("gratitudeStatements")
//         response.status(200).json(gratitudeStatements)
//     }
//     catch (error) {
//         console.log("------ error in api/user/gratitudeStatements:", error)
//         response.status(400).json({ status: error.message })
//     }



//     if (request.method === "POST") {

//         try {
//             const newGratitudeData = request.body
//             // newGratitudeData has dateCreation + statementText + userId
//             const newStatement = await GratitudeStatement.create(newGratitudeData)
//             const userWithNewStatement = await User.findById(newGratitudeData.userIdForGratitudeStatement)
//             userWithNewStatement.gratitudeStatements.push(newStatement)
//             await userWithNewStatement.save()

//             return response.status(201).json({ status: "added new Gratitude Statement of the loggedIn User successfully" })
//         } catch (error) {
//             console.error(error)
//             return response.status(400).json({ status: "Could not add the gratitude Statement!" })
//         }
//     }
// }