import { Router } from "express";

export const indexRouter = Router()

indexRouter.get("/", (req, res) => {
    res.sendFile(`${process.cwd()}/public/pages/index.html`);
});

indexRouter.get("/css", (req, res) => {
    res.sendFile(`${process.cwd()}/public/css/output.css`);
});