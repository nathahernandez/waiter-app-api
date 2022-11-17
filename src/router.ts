import path from "node:path";
import { Router } from "express";
import multer from "multer";
import { createCategory, listCategories } from "./app/controllers/categoryController";
import { createOrder, listOrders } from "./app/controllers/orderController";
import { createProduct, listProducts } from "./app/controllers/productController";

export const router = Router();

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback){
			callback(null, path.resolve(__dirname, "..", "uploads"));
		},
		filename(req, file, callback ) {
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	}),
});

//List/Create Categories
router.get("/categories", listCategories);
router.post("/categories", createCategory);
//List/Create Products
router.get("/products", listProducts);
router.post("/products", upload.single("image") ,createProduct);
// //List/Create Orders
// router.get("/orders", listOrders);
// router.post("/orders", createOrder);
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
