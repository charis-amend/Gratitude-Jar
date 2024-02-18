import mongoose from "mongoose";
import "./GratitudeStatements"
const { Schema, models, model } = mongoose;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    gratitudeStatements: { type: [Schema.Types.ObjectId], ref: "GratitudeStatements" }
});

const User = models.User || model("User", userSchema);

export default User;