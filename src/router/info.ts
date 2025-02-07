import { Router } from "express";

export const infoRouter = Router()

infoRouter.get("/info", (req, res) => {
    res.sendFile(`${process.cwd()}/public/pages/info.html`);
});