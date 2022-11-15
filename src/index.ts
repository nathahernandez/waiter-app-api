import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const DB_PATH = `${process.env.DB_PATH}`;
const PORT = process.env.PORT;

mongoose.connect(DB_PATH)
	.then(() => {
		const app = express();
		app.listen(PORT, () => console.log("running"));

	})
	.catch(()=> console.log("ERROR"));