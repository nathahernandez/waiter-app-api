import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
import { UPLOAD_PATH } from "./app/utils";

dotenv.config();
const DB_PATH = `${process.env.DB_PATH}`;

mongoose.connect(DB_PATH)
	.then(() => {
		const PORT = process.env.PORT;
		const app = express();

		app.use("/uploads", express.static(UPLOAD_PATH));
		app.use(express.json());
		app.use(router);
		app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT} 🚝`));
	})
	.catch(err=> console.log(err));