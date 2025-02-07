import mongoose from "mongoose";

export const mongooseRun = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		mongoose.connection.on("error", (error) => {
			console.error("MongoDB connection error:", error);
		});
		mongoose.connection.once("open", () => {
			console.log("Connection to MongoDB.");
		});
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};
