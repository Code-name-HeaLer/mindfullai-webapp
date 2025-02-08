import mongoose from "mongoose";

// Message schema
const messageSchema = new mongoose.Schema({
	text: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
	sessionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Session",
		required: true,
	},
});

// Session schema
const sessionSchema = new mongoose.Schema({
	userId: { type: String, unique: true, required: true },
	messages: [messageSchema],
});

const Session = mongoose.model("Session", sessionSchema);
const Message = mongoose.model("Message", messageSchema);

export { Session, Message };
