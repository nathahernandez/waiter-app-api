import { Schema } from "mongoose";

export const StringType = {
	required: true,
	type: String
};
export const CategoryType = {
	required: true,
	type: Schema.Types.ObjectId,
	ref: "Category"
};
export const IgredientsType = {
	required: true,
	type: [{
		name: String,
		icon: String
	}]
};
export const PriceType = {
	required: true,
	price: Number
};
