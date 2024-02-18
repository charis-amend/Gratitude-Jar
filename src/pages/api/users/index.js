import dbConnect from "../../../../db/connect";
import User from "../../../../db/models/User";

export default async function handler(request, response) {
    try {
        await dbConnect();
        try {
            if (request.method === "GET") {
                const users = await User.find();
                return response.status(200).json(users);
            } else if (request.method === "POST") {
                await User.create(request.body);
                response.status(200).json({ success: "user successfully created" });
            }
        } catch (e) {
            console.log(e);
        }
    } catch (e) {
        console.log(e);
    }
}