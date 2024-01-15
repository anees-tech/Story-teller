import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productDescription: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true }
);

const ProductModel = mongoose.model("products", ProductSchema);

export default ProductModel;
