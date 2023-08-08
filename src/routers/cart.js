import {
  create,
  getCartById,
  getCartProductsByUserId,
  updateByCount,
  getCartByIdAndUpdate,
  getCartByIdAndDelete,
  addProductToCart,
  removeProductFromCart,
} from "../controllers/cart/index.js";
import express from "express";

const app = express();

app.post("/", create);
app.get("/", getCartById);
app.get("/products", getCartProductsByUserId);
app.put("/", getCartByIdAndUpdate);
app.put("/addProductToCart/", addProductToCart);
app.put("/updateByCount", updateByCount);
app.put("/removeProductFromCart/", removeProductFromCart);
app.delete("/:id", getCartByIdAndDelete);

export default app;


