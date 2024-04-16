import shortid from "shortid";
import URLModel from "../Models/urlModel.js";

const generateShortUrlController = async (req, res) => {
	const { longUrl } = req.body;
	try {
		if (!longUrl) {
			res.status(400).json({ success: false, message: "long url is required" });
		}
		const shortId = shortid();
		const generateShortUrl = await URLModel.create({
			shortUrl: shortId,
			redirectURL: longUrl,
			visitHistory: [],
		});

		const { shortUrl } = generateShortUrl;
		res.status(201).json({ success: true, message: "short url generated", shortUrl });
	} catch (error) {
		res.status(500).json({ success: false, message: "error in creating short url", error });
	}
};

const redirectController = async (req, res) => {
	const { shortUrl } = req.params;
	try {
		const updateHistory = await URLModel.findOneAndUpdate(
			{ shortUrl },
			{ $push: { visitHistory: { timestamp: Date.now() } } }
		);

		res.redirect(updateHistory.redirectURL);
	} catch (error) {
		res.status(500).json({ success: false, message: "error in redirecting url", error });
	}
};

const getAnalyticsController = async (req, res) => {
	const { shortUrl } = req.params;
	try {
		const results = await URLModel.findOne({ shortUrl });
		const totalClicks = results.visitHistory.length;
		const analytics = results.visitHistory;
		return res
			.status(200)
			.json({ success: true, message: "analytics fetched successfully", totalClicks, analytics });
	} catch (error) {
		res.status(500).json({ success: false, message: "error in getting analytics", error });
	}
};

export { generateShortUrlController, redirectController, getAnalyticsController };
