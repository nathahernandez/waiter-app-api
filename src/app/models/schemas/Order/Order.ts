import { model} from "mongoose";
import { OrderSchema } from "./OrderSchema";

export const Order = model("Order", OrderSchema);