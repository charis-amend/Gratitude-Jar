import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";

export default async function handler(request, response) {
    try {
        await dbConnect();
        if (request.method === "GET") {
            const users = await User.find();
            return response.status(200).json(users);
        }
        if (request.method === "POST") {
            User.create(request.body);
            return response
                .status(200)
                .json({ success: true, status: "User created" });
        }
    } catch (error) {
        console.log("----- error in /api/users/index.js: ", error);
        response.status(400).json({ status: "couldn't Get/Post in /api/users" })
    }
}