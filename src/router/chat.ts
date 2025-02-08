import { Router } from "express";
import {
	getChatHistory,
	addMessageToSession,
} from "../database/controllers/chatControll.r";
export const chatRouter = Router();

chatRouter.get("/chat", (req, res) => {
	res.sendFile(`${process.cwd()}/public/pages/chat.html`);
});

chatRouter.get("/chat/history", (req, res) => {
	getChatHistory(req, res);
});

chatRouter.post("/chat/message", (req, res) => {
	addMessageToSession(req, res);
});
