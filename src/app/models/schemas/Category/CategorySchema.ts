import { Schema } from "mongoose";
import { StringType } from "./CategorySchemaTypes";

export const CategorySchema = new Schema ({
	name: StringType,
	icon: StringType
});
