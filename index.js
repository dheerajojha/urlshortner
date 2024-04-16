import colors from "colors";
import express from "express";
import urlRoute from "./Routes/urlRoute.js";
import dotenv from "dotenv";
import DbConnect from "./Config/DbConnect.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
// DB CONNECTION
DbConnect();

// MIDDLEWARE
app.use(express.json());

// API ROUTES
app.use("/shortUrl", urlRoute);

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`.bgCyan);
});
