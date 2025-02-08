import { Router } from "express";

export const profileRouter = Router();

profileRouter.get("/profile", (req, res) => {
	res.sendFile(`${process.cwd()}/public/pages/profile.html`);
	console.log("Profile loaded");
});
