import colors from "colors";
import express from "express";
import path from "path";
import urlRoute from "./Routes/urlRoute.js";
import staticRoute from "./Routes/StaticRoute.js";
import dotenv from "dotenv";
import DbConnect from "./Config/DbConnect.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
// DB CONNECTION
DbConnect();

// STATIC FILE
app.set("view engine", "ejs");
app.use(express.static(path.resolve("./views")));

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API ROUTES
app.use("/shorturl", urlRoute);
app.use("/", staticRoute);

app.listen(PORT, () => {
	console.log(`server listening on ${PORT}`.bgCyan);
});
