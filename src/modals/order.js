import mongoose from "mongoose";
import addressSchema from "./address.js";

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "User id is required"],
    },
    paymentMode: {
      type: String,
      enum: ["upi", "cod", "credit", "debit", " wallet"],
      default: "cod",
    },
    productsId: {
      type: [mongoose.Types.ObjectId],
      ref: "users",
      required: [true, "Product id is required"],
    },
    dateOfDelivery: {
      type: Date,
    },
    address: {
      type: addressSchema,
      optional: true,
    },
    status: {
      type: String,
      enum: ["YET_TO_SHIP", "SHIPPED", "DELIVERED", "CANCEL"],
      default: "YET_TO_SHIP",
    },
  },
  { timestamps: true }
);
const order = mongoose.model("order", OrderSchema);

export default order;
