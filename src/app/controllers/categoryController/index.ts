import { Request, Response } from "express";
import { Category } from "../../models/schemas/Category/Category";
import { Product } from "../../models/schemas/Product/Product";

export const createCategory = async (req: Request, res: Response) => {
	const { icon, name } = req.body;

	await Category.create({
		icon,
		name
	})
		.then(category => res.status(201).json(category))
		.catch(err => res.status(501).json(err));
};

export const listCategories = async (req: Request, res: Response) => {
	await Category.find()
		.then(categories => res.status(200).json(categories))
		.catch(err => res.status(404).json(err));
};

export const listByCategory = async (req: Request, res: Response) => {
	const { categoryId } = req.params;

	await Product.find().where("category").equals(categoryId)
		.then(products => res.status(200).json(products))
		.catch(err => res.status(404).json(err));
};