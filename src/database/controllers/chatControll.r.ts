import { Request, Response } from "express";
import { Session, Message } from "../schemas/chatSchema";
// Create a new session for a user
export const createSession = async (userId: string) => {
	const session = new Session({
		userId,
		messages: [],
	});
	await session.save();
	return session;
};

// Add a new message to a session
export const addMessageToSession = async (req: Request, res: Response) => {
	const { text } = req.body;
	const { userId } = req.session;

	if (!text) {
		return res.status(400).json({ error: "Message cannot be empty" });
	}

	let session = await Session.findOne({ userId });

	if (!session) {
		session = await createSession(userId);
	}

	const newMessage = new Message({
		text,
		sessionId: session._id,
	});

	session.messages.push(newMessage);
	await session.save();

	res.json({ message: newMessage });
};

// Get chat history for a session
export const getChatHistory = async (req: Request, res: Response) => {
	const { userId } = req.session;

	const session = await Session.findOne({ userId }).populate("messages");
	if (!session) {
		return res.status(404).json({ error: "Session not found" });
	}

	res.json(session.messages);
};
