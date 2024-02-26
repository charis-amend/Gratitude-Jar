import mongoose from "mongoose";
import "./GratitudeStatement"
const { Schema, models, model } = mongoose;

const userSchema = new Schema({
    // mongoDBs _id
    email: { type: String, required: true, unique: true },
    // nextauth emailVerified date and time  
    gratitudeStatements: { type: [Schema.Types.ObjectId], ref: "GratitudeStatement" }
});

const User = models.User || model("User", userSchema);

export default User;