import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./router";

dotenv.config();
const DB_PATH = `${process.env.DB_PATH}`;

mongoose.connect(DB_PATH)
	.then(() => {
		const PORT = process.env.PORT;
		const app = express();
		app.use(cors());
		app.use("/uploads", express.static("uploads"));
		app.use(express.json());
		app.use(router);
		app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT} 🚝`));
	})
	.catch(err=> console.log(err));