import { Request, Response } from "express";
import { Order } from "../../models/schemas/Order/Order";

export const createOrder = async (req: Request, res: Response) => {
	const { products, table } = req.body;
	await Order
		.create({ products, table })
		.then(order => res.status(200).json(order))
		.catch(err => res.status(501).json(err));
};

export const listOrders = async (req: Request, res: Response) => {
	await Order
		.find()
		.sort({ createdAt: 1 })
		.populate("products.product")
		.then(orders => res.status(200).json(orders))
		.catch(err => res.status(501).json(err));
};

export const changeOrderStatus = async (req: Request, res: Response) => {
	const { orderId } = req.params;
	const { status } = req.body;
	const statusTest = [ "WAITING", "IN_PRODUCTION", "DONE" ].includes(status);
	const errorMessage = { error: "The Status must be WAITING or IN_PRODUCTION or DONE." };

	!statusTest
		? res.status(400).json(errorMessage)
		: await Order
			.findByIdAndUpdate(orderId, { status })
			.then(() => res.sendStatus(204))
			.catch(err => res.status(500).json(err));
};

export const deleteOrderById = async (req: Request, res: Response) => {
	const { orderId } = req.params;

	await Order
		.findByIdAndDelete(orderId)
		.then(() => res.sendStatus(204))
		.catch(err => res.status(400).json(err));
};