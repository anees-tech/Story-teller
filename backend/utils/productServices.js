import ProductModel from "../models/productModel.js";

class ProductServices {
  // get all products
  async getProducts() {
    const products = await ProductModel.find();
    // console.log(products) 
    return products;
  }
  async findDetailedProduct(productId) {
    const product = await ProductModel.findOne({productId});
    // console.log(product)
    return product;
  }
}

export default new ProductServices();
