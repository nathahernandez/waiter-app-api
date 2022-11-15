import { model} from "mongoose";
import { ProductSchema } from "./ProductSchema";

export const Product = model("Product", ProductSchema);