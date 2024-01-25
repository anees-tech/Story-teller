import { Router } from "express";
import ProductsController  from "../controllers/productsController.js";

const productRoutes = Router();

productRoutes.get('/products', ProductsController.getProducts)
productRoutes.get('/products/:productId', ProductsController.getProductDetails)


export default productRoutes;