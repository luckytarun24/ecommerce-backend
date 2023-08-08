import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, "Country  is required"],
    },
    street: {
      type: String,
      required: [true, "Street  is required"],
    },
    city: {
      type: String,
      required: [true, "City  is required"],
    },
    state: {
      type: String,
      required: [true, "State  is required"],
    },
    pincode: {
      type: String,
      required: [true, "Pincode  is required"],
    },
  },
  { timestamps: true }
);

export default addressSchema;
