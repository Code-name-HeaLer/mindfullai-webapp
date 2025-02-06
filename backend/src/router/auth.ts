import passport from "passport";
import { router } from "../server";
router.get("/auth/google", (req, res) => {
	passport.authenticate("google", {
		scope: ["profile", "email"],
		successRedirect: "/profile",
		failureRedirect: "/",
	});
});
