import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";
// import GratitudeStatement from "../../../../db/models/GratitudeStatement";

// getting only the gratitudeStatements from the loggedInUser 

export default async function handler(request, response) {
    // get id of loggedInUser
    // const {id} = request.query

    await dbConnect();
    const { userId } = request.query
    try {
        const gratitudeStatements = await User.findById(userId).populate("gratitudeStatements")
        response.status(200).json(gratitudeStatements)
    }
    catch (error) {
        console.log("------ error in api/user/gratitudeStatements:", error)
        response.status(400).json({ status: error.message })
    }
}