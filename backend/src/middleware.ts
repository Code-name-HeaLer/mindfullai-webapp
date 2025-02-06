import session from "express-session";
import passport from "passport";

export const serverSession = session({
	secrete: process.env.COOKIE_SECRET_KEY,
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7,
		httpOnly: true,
		secure: process.env.COOKIE_SECRET_KEY,
	},
});
