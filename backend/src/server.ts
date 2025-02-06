import express from "express";
import { serverSession } from "./middleware";
import passport from "passport";

export const http = express();

http.use(serverSession);
http.use(passport.initialize());
http.use(passport.session());

http.listen(process.env.PORT_HTTP, () => {
	console.log(`Http Server connected on port: ${process.env.PORT_HTTP}`);
});
