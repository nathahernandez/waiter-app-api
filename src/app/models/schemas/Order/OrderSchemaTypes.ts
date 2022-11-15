import { Schema } from "mongoose";

export const StringType = {
	required: true,
	type: String
};
export const CreatedAtType = {
	type: Date,
	default: Date.now
};
export const StatusType = {
	type: String,
	enum: ["WAITING", "IN_PRODUCTION", "DONE"],
	default: "WAITING"
};
export const ProductsType = {
	required: true,
	type: [{
		product: {
			required: true,
			type: Schema.Types.ObjectId,
			ref: "Product"
		},
		quantity: {
			type: Number,
			default: 1
		}
	}]
};