import Router from "express";
export const profileRouter = Router();
profileRouter.get("/profile", (req, res) => {
	if (!req.isAuthenticated()) {
		return res.redirect("/");
	}
	res.sendFile("/pages/profile.html");
});
