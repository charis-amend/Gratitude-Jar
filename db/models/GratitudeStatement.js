import mongoose from "mongoose";
const { Schema } = mongoose;
import "./User";

const gratitudeStatementSchema = new Schema({
    // gratitudeStatementObjectId: ObjectId('') predefined _id by mongoDB
    dateCreation: { type: String, required: true },
    statementText: { type: String, required: true },
});

const GratitudeStatement =
    mongoose.models.GratitudeStatement || mongoose.model("GratitudeStatement", gratitudeStatementSchema);
export default GratitudeStatement;
