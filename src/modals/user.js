import mongoose from "mongoose";
import validator from "validator";
import addressSchema from "./address.js";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      lowercase: true,
      validate: (value) => {
        return validator.isEmail(value);
      },
    },
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    mobileNo: {
      type: Number,
      required: [true, "Mobile No is Required"],
      unique: true,
      validate: {
        validator: function (mobileNo) {
          return `${mobileNo}`.length === 10;
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    address: {
      type: [addressSchema],
      optional: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);

export default User;
