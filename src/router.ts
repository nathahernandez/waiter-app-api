import { Router } from "express";

import * as categoryController from "./app/controllers/categoryController";
import * as productController from "./app/controllers/productController";
import * as orderController from "./app/controllers/orderController";
import { upload } from "./app/utils/index";

export const router = Router();

router.get("/categories", categoryController.listCategories);
router.post("/categories", categoryController.createCategory);
router.get("/categories/:categoryId/products", categoryController.listByCategory);

router.get("/products", productController.listProducts);
router.post("/products", upload.single("image"), productController.createProduct);

router.get("/orders", orderController.listOrders);
router.post("/orders", orderController.createOrder);
router.patch("/orders/:orderId", orderController.changeOrderStatus);
router.delete("/orders/:orderId", orderController.deleteOrderById);
