import mongoose from "mongoose";

const DbConnect = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URL);
		console.log(`db connected successfully to ${connect.connection.host}`.bgMagenta);
	} catch (error) {
		console.log("error in db connection", error);
	}
};

export default DbConnect;
