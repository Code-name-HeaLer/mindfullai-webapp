import passport from "passport";
import { http } from "../server";
http.get("/auth/google", (req, res) => {
	passport.authenticate("google", {
		scope: ["profile", "email"],
		successRedirect: "/profile",
		failureRedirect: "/",
	});
});
