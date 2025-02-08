import { Router } from "express";
import {
	saveJournalEntry,
	getUserJournals,
} from "../database/controllers/journalController";
export const journalRouter = Router();

journalRouter.get("/journal", (req, res) => {
	res.sendFile(`${process.cwd()}/public/pages/journal.html`);
});

journalRouter.post("/entry", (req, res) => {
	saveJournalEntry(req, res);
});

journalRouter.get("/entries", (req, res) => {
	getUserJournals;
});
