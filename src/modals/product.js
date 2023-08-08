import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Name is Required"],
    },
    image: {
      type: String,
      required: [true, "Image is Required"],
    },
    imageList: { type: [String], required: [true, "Image List is Required"] },
    quantity: {
      type: Number,
      required: [true, "Quantity is Required"],
    },
    price: {
      type: Number,
      required: [true, "Price is Required"],
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      required: [true, "Discount is Required"],
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    category: {
      type: String,
      enum: ["men", "women", "kid"],
      required: [true, "Category is Required"],
    },
    rating: {
      type: Number,
      default: Math.floor(Math.random() * 5) + 1,
    },
    subTitle: {
      type: String,
      required: [true, "Subtitle is Required"],
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("product", productSchema);

export default Product;
