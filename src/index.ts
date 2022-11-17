import path from "node:path";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

dotenv.config();

const DB_PATH = `${process.env.DB_PATH}`;
const PORT = process.env.PORT;
const UPLOAD_PATH = path.resolve(__dirname, "..", "uploads");

mongoose.connect(DB_PATH)
	.then(() => {
		const app = express();
		app.use("/uploads", express.static(UPLOAD_PATH));
		app.use(express.json());
		app.use(router);
		app.listen(PORT, () => console.log("Running"));

	})
	.catch(()=> console.log("ERROR"));