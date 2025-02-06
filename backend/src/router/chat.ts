import { router } from "../server";
router.get("/chat", (req, res) => {
	res.sendFile("/pages/chat.html");
});
router.post("/chat");
router.post("/chat/session");
router.get("/chat/session");
router.post("/chat/session");
router.delete("/chat/session");
