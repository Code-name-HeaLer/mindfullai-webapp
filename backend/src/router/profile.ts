import { http } from "../server";
http.get("/profile", (req, res) => {
	if (!req.isAuthenticated()) {
		return res.redirect("/");
	}
	res.sendFile("pages/profile.html", { root: "../frontend" });
});
