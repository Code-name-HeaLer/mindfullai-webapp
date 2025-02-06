import { router } from "../server";
router.get("/", (req, res) => {
	res.sendFile("/pages/index.html");
});
router.get("/styles", (req, res) => {
	res.sendFile("/css/style.css", { root: "../frontend" });
});
