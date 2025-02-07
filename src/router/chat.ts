import { Router } from "express";

export const chatRouter = Router()

chatRouter.get("/chat", (req, res) => {
    res.sendFile(`${process.cwd()}/public/pages/chat.html`);
});