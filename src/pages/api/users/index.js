// import dbConnect from "../../../../db/connect";
// import User from "../../../../db/models/User";

// export default async function handler(request, response) {
//     try {
//         await dbConnect();
//         if (request.method === "GET") {
//             const { userId } = request.query; // Check if there is a specific user ID provided in the request query
//             if (userId) {
//                 const user = await User.findById(userId);
//                 if (user) {
//                     return response.status(200).json(user);
//                 } else {
//                     return response.status(404).json({ status: "User not found" });
//                 }
//             }
//         }

//         if (request.method === "POST") {
//             User.create(request.body);
//             return response
//                 .status(200)
//                 .json({ success: true, status: "User created" });
//         }

//         else {
//             return response.status(405).json({ status: "Method Not Allowed" });
//         }
//     } catch (error) {
//         console.log("----- error in /api/users/index.js: ", error);
//         response.status(400).json({ status: "couldn't Get/Post in /api/users" }, { error: e.message })
//     }
// }

