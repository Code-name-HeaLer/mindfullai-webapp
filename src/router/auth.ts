import { Router } from "express";
import passport from "../auth/google";

export const authRouter = Router();

authRouter.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
	}),
);

authRouter.get(
	"/auth/google/redirect",
	passport.authenticate("google", {
		successRedirect: "/profile",
		failureRedirect: "/",
	}),
);
