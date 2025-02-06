import express from "express";
import { serverSession } from "./middleware";
import passport from "passport";
import path from "path";

const http = express();
export const router = express.Router();

http.use(express.static(path.join(process.cwd(), "../frontend/pages")));
http.use(express.static(path.join(process.cwd(), "../frontend/")));
http.use(serverSession);
http.use(passport.initialize());
http.use(passport.session());
http.listen(process.env.PORT_HTTP, () => {
	console.log(`Http Server connected on port: ${process.env.PORT_HTTP}`);
});
