import mongoose from "mongoose";
const { Schema } = mongoose;

const gratitudeStatementsSchema = new Schema({
    // gratitudeStatementObjectId: ObjectId('') predefined _id by mongoDB
    dateCreation: { type: String, require: true },
    statementText: { type: String, require: true },
});

const GratitudeStatements =
    mongoose.models.GratitudeStatements || mongoose.model("GratitudeStatements", gratitudeStatementsSchema);
export default GratitudeStatements;
