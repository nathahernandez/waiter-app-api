import { Request, Response } from "express";
import { Category } from "../../models/schemas/Category/Category";

export const createCategory = async (req: Request, res: Response) => {
	const { icon, body } = req.body;

	await Category.create({
		icon,
		body
	});

	res.status(201).send("Category created");
};

export const listCategories = async (req: Request, res: Response) => {
	const categories = await Category.find();
	res.status(200).json(categories);
};