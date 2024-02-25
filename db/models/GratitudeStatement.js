import mongoose from "mongoose";
const { Schema } = mongoose;

const gratitudeStatementSchema = new Schema({
    // gratitudeStatementObjectId: ObjectId('') predefined _id by mongoDB
    dateCreation: { type: String, require: true },
    statementText: { type: String, require: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
});

const GratitudeStatement =
    mongoose.models.GratitudeStatement || mongoose.model("GratitudeStatement", gratitudeStatementSchema);
export default GratitudeStatement;
