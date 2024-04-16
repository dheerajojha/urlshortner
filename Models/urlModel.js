import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
	{
		shortUrl: { type: String, required: true, unique: true },
		redirectURL: { type: String, required: true },
		visitHistory: [{ timestamp: { type: Number } }],
	},
	{ timestamps: true }
);

const URLModel = mongoose.model("url", urlSchema);
export default URLModel;
