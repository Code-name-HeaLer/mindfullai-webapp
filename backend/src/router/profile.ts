import { router } from "../server";
router.get("/profile", (req, res) => {
	if (!req.isAuthenticated()) {
		return res.redirect("/");
	}
	res.sendFile("pages/profile.html", { root: "../frontend" });
});
