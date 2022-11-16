import { Router } from "express";

export const router = Router();
//List/Create Categories
router.get("/categories", (req, res) => {
	res.send("OK");
});
router.post("/categories", (req, res) => {
	res.send("OK");
});
//List/Create Products
router.get("/products", (req, res) => {
	res.send("OK");
});
router.post("/products", (req, res) => {
	res.send("OK");
});
//List/Create Orders
router.get("/orders", (req, res) => {
	res.send("OK");
});
router.post("/orders", (req, res) => {
	res.send("OK");
});
// List Products By Category
router.get("/category/:categoryId/products", (req, res) => {
	res.send("OK");
});
// Change Order
router.patch("/orders/:orderId", (req, res) => {
	res.send("OK");
});
// Delete order
router.delete("/orders/:", (req, res) => {
	res.send("OK");
});
