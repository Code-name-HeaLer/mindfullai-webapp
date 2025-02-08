import { Request, Response } from "express";
import { Chat } from "../schemas/chatSchema";

export const chatController = {
	// Get all chats for a user (simulated for now)
	async getAllChats(req: Request, res: Response) {
		try {
			const chats = await Chat.find(); // In a real scenario, we can filter by user
			if (!chats || chats.length === 0) {
				return res.status(404).json({ message: "No chats found" });
			}
			res.json(chats);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.json({ message: "Error fetching chats", error: error.message });
		}
	},

	// Get a single chat by ID
	async getChat(req: Request, res: Response) {
		try {
			const chat = await Chat.findById(req.params.chatId);
			if (!chat) {
				return res.status(404).json({ message: "Chat not found" });
			}
			res.json(chat);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.json({ message: "Error fetching chat", error: error.message });
		}
	},

	// Create a new chat
	async createChat(req: Request, res: Response) {
		const { title = "New Chat" } = req.body;

		if (typeof title !== "string" || title.trim() === "") {
			return res.status(400).json({ message: "Invalid chat title" });
		}

		const newChat = new Chat({
			title: title,
			messages: [
				{
					sender: "bot",
					content: "Hello! How are you feeling today?",
				},
			],
		});

		try {
			const savedChat = await newChat.save();
			res.status(201).json(savedChat);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.json({ message: "Error creating chat", error: error.message });
		}
	},

	// Add a message to a chat
	async addMessage(req: Request, res: Response) {
		const { message, sender } = req.body;

		if (!message || typeof message !== "string" || message.trim() === "") {
			return res.status(400).json({ message: "Message cannot be empty" });
		}

		if (!sender || !["user", "bot"].includes(sender)) {
			return res.status(400).json({ message: "Invalid sender value" });
		}

		try {
			const chat = await Chat.findById(req.params.chatId);
			if (!chat) {
				return res.status(404).json({ message: "Chat not found" });
			}

			chat.messages.push({ sender, content: message });
			await chat.save();

			res.status(200).json(chat);
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.json({ message: "Error adding message", error: error.message });
		}
	},
};
