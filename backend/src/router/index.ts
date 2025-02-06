import { http } from "../server";
http.get("/", (req, res) => {
	res.sendFile("pages/index.html", { root: "../frontend" });
});
http.get("/styles", (req, res) => {
	res.sendFile("css/style.css", { root: "../frontend" });
});
