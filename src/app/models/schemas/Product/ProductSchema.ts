import { Schema } from "mongoose";
import {
	CategoryType,
	IgredientsType,
	PriceType,
	StringType,
} from "./ProductSchemaTypes";

export const ProductSchema = new Schema ({
	name: StringType,
	description: StringType,
	imagePath: StringType,
	price: PriceType,
	igredients: IgredientsType,
	category: CategoryType
});