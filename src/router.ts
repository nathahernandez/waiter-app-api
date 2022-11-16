import { Router } from "express";
import { createCategory, listCategories } from "./app/controllers/categoryController";
import { createOrder, listOrders } from "./app/controllers/orderController";
import { createProduct, listProducts } from "./app/controllers/productController";

export const router = Router();
//List/Create Categories
router.get("/categories", listCategories);
router.post("/categories", createCategory);
//List/Create Products
router.get("/products", listOrders);
router.post("/products", createOrder);
//List/Create Orders
router.get("/orders", listProducts);
router.post("/orders", createProduct);
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
