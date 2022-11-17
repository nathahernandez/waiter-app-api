import { Request, Response } from "express";
import { Order } from "../../models/schemas/Order/Order";

export const createOrder = async (req: Request, res: Response) => {
	const {
		products,
		table
	} = req.body;

	await Order.create({
		products,
		table
	});

	res.status(201).send("Order created.");
};

export const listOrders = async (req: Request, res: Response) => {
	const orders = await Order.find();

	res.status(200).json(orders);
};