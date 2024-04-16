import express from "express";
import getStaticFileController from "../Controllers/StaticController.js";
const router = express.Router();

router.get("/", getStaticFileController);
export default router;
