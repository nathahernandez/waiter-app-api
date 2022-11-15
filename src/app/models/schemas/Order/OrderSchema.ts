import { Schema } from "mongoose";
import {
	StringType,
	CreatedAtType,
	StatusType,
	ProductsType
} from "./OrderSchemaTypes";

export const OrderSchema = new Schema({
	table: StringType,
	status: StatusType,
	createdAt: CreatedAtType,
	products: ProductsType
});