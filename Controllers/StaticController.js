const getStaticFileController = (req, res) => {
	try {
		res.status(200).render("home");
	} catch (error) {
		res.status(500).status(500).json("error in static file rendering", error);
	}
};

export default getStaticFileController;
