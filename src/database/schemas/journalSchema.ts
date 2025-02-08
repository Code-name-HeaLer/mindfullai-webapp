import mongoose, { Schema, Document } from "mongoose";

interface JournalEntry extends Document {
	date: string;
	content: string;
	mood: string;
	userId: mongoose.Types.ObjectId;
}

const journalSchema = new Schema<JournalEntry>({
	date: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	mood: {
		type: String,
		required: true,
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
});

const Journal = mongoose.model<JournalEntry>("Journal", journalSchema);

export { Journal };
