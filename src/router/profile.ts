import { Router } from "express";

export const profileRouter = Router();

profileRouter.get("/profile", (req, res) => {
	if (req.isAuthenticated()) {
		res.sendFile(`${process.cwd()}/public/pages/profile.html`);
	}
	res.redirect("/");
});
// profileRouter.get("/user",(req,res)=>{

// })
