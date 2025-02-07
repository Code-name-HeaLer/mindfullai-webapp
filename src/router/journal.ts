import { Router } from "express";

export const journalRouter = Router()

journalRouter.get("/journal", (req, res) => {
    res.sendFile(`${process.cwd()}/public/pages/journal.html`);
});