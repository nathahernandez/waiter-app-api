import { model } from "mongoose";
import { CategorySchema } from "./CategorySchema";

export const Category = model("Category", CategorySchema);