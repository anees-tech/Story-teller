import { Router } from "express";
import ProductsController  from "../controllers/productsController.js";

const productRoutes = Router();

productRoutes.get('/products', ProductsController.getProducts)

export default productRoutes;