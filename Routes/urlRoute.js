import express from "express";
import {
	generateShortUrlController,
	getAnalyticsController,
	redirectController,
} from "../Controllers/urlController.js";
const router = express.Router();

router.post("/", generateShortUrlController);
router.get("/redirect/:shortUrl", redirectController);
router.get("/analytics/:shortUrl", getAnalyticsController);

export default router;
