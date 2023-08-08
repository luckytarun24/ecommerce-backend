import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      unique: [true, "Already exists"],
      required: [true, "User id is required"],
    },
    productIds: {
      type: [mongoose.Types.ObjectId],
      ref: "products",
      required: [true, "Product id is required"],
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", cartSchema);

export default Cart;
