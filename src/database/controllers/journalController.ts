import { Request, Response } from "express";
import { Journal } from "../schemas/journalSchema";
// Save a new journal entry
export const saveJournalEntry = async (req: Request, res: Response) => {
	const { content, mood, date } = req.body;
	const { userId } = req.session;

	if (!userId) {
		return res.status(400).json({ error: "User ID is required" });
	}

	try {
		const journalEntry = new Journal({
			content,
			mood,
			date,
			userId,
		});

		await journalEntry.save();
		res.json({ message: "Journal entry saved", journalEntry });
	} catch (error) {
		res.status(500).json({ error: "Failed to save journal entry" });
	}
};

// Get all journal entries for the logged-in user
export const getUserJournals = async (req: Request, res: Response) => {
	const { userId } = req.session;

	if (!userId) {
		return res.status(400).json({ error: "User ID is required" });
	}

	try {
		const journals = await Journal.find({ userId }).sort({ date: -1 });
		res.json(journals);
	} catch (error) {
		res.status(500).json({ error: "Failed to retrieve journal entries" });
	}
};
