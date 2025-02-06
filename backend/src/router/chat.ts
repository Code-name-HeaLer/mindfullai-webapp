import { router } from "../server";
router.get("/chat", (req, res) => {
	res.sendFile("/pages/chat.html");
});
