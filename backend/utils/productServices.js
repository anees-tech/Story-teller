import ProductModel from "../models/productModel.js";

class ProductServices {
  // get all products
  async getProducts() {
    const products = await ProductModel.find();
    console.log(products)
    return products;
  }
}

export default new ProductServices();
