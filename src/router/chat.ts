import { Router } from "express";
import { chatController } from "../database/controllers/chatController.";

export const chatRouter = Router();

chatRouter.get("/chat", (req, res) => {
	res.sendFile(`${process.cwd()}/public/pages/chat.html`);
});
// Get all chats
chatRouter.get("/chats", (req, res) => {
	chatController.getAllChats(req, res);
});

// Get a single chat by ID
chatRouter.get("/chats/:chatId", (req, res) => {
	chatController.getChat(req, res);
});

// Create a new chat
chatRouter.post("/chats", (req, res) => {
	chatController.createChat(req, res);
});

// Add a message to a specific chat
chatRouter.post("/chats/:chatId/messages", (req, res) => {
	chatController.addMessage(req, res);
});
