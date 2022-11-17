import { Request, Response } from "express";
import { Category } from "../../models/schemas/Category/Category";

export const createCategory = async (req: Request, res: Response) => {
	const { icon, name } = req.body;

	await Category.create({
		icon,
		name
	})
		.then( () => res.status(201).send("Category created.") )
		.catch( (err) => res.status(501).send(err) );

};

export const listCategories = async (req: Request, res: Response) => {
	await Category.find()
		.then((categories) => res.status(200).json(categories))
		.catch((err) => res.status(404).json(err));

};