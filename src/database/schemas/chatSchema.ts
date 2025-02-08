import { Request, Response } from "express";
import mongoose from "mongoose";

// Chat Schema (Mongoose Model)
const chatSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			default: "New Chat",
		},
		messages: [
			{
				sender: {
					type: String,
					enum: ["user", "bot"],
					required: true,
				},
				content: {
					type: String,
					required: true,
				},
				timestamp: {
					type: Date,
					default: Date.now,
				},
			},
		],
	},
	{
		timestamps: true, // Automatically adds createdAt and updatedAt
	},
);

export const Chat = mongoose.model("Chat", chatSchema);
