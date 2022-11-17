import { Request, Response } from "express";
import { Product } from "../../models/schemas/Product/Product";

export const createProduct = async (req: Request, res: Response) => {
	const {
		name,
		description,
		price,
		ingredients,
		category
	} = req.body;
	const imagePath = req.file?.filename;

	await Product
		.create({
			name,
			description,
			price: Number(price),
			ingredients: JSON.parse(ingredients),
			category,
			imagePath
		})
		.then(prod => res.status(201).json(prod))
		.catch(err => res.status(501).json(err));
};

export const listProducts = async (req: Request, res: Response) => {
	await Product
		.find()
		.then(list => res.status(201).json(list))
		.catch(err => res.status(501).json(err));
};