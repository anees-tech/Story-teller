import { CustomApiError } from "../utils/Errors.js";
import ProductServices from "../utils/productServices.js";


class ProductsController {
  async getProducts(req, res) {
    try {
        const products = await ProductServices.getProducts();
        res.json(products);
    } catch (error) {
        throw new CustomApiError("Product Api Error", 500);
    }
  }

  async getProductDetails(req, res) {
    try {
        // console.log(req.params.productId);
        const product = await ProductServices.findDetailedProduct(req.params.productId);
        // console.log(product);
        res.json(product);
    }
    catch(error){
        throw new CustomApiError("Product Api Error", 500);
    }
  }
}

export default new ProductsController();