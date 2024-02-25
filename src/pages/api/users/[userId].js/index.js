import dbConnect from "../../../../../db/connect";
import User from "../../../../../db/models/User";
// import GratitudeStatement from "../../../../db/models/GratitudeStatement";

// getting only the gratitudeStatements from the loggedInUser 

export default async function handler(request, response) {
    await dbConnect();
    const { userId } = request.query
    console.log("----- request.query in api/users/[userId]:", request.query)

    try {
        const gratitudeStatements = await User.findById(userId).populate("gratitudeStatements")
        response.status(200).json(gratitudeStatements)
    }
    catch (error) {
        console.log("------ error in api/user/gratitudeStatements:", error)
        response.status(400).json({ status: error.message })
    }



    if (request.method === "POST") {

        try {
            const commentData = request.body
            // commentData has name, comment, placeIdForComment
            const newComment = await Comment.create(commentData)
            const placeWithNewComment = await Place.findById(commentData.placeIdForComment)
            placeWithNewComment.comments.push(newComment)
            await placeWithNewComment.save()

            return response.status(201).json({ status: "added Comment successfully" })
        } catch (error) {
            console.error(error)
            return response.status(400).json({ status: "Could not add Comment!!" })
        }
    }
}