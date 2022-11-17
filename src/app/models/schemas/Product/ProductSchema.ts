import { Schema } from "mongoose";
import {
	CategoryType,
	IngredientsType,
	PriceType,
	StringType,
} from "./ProductSchemaTypes";

export const ProductSchema = new Schema ({
	name: StringType,
	description: StringType,
	imagePath: StringType,
	price: PriceType,
	ingredients: IngredientsType,
	category: CategoryType
});