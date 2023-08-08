import {
  create,
  get,
  getProductByIdAndUpdate,
  getProductByIdAndDelete,
  getAllProducts,
} from "../controllers/product/index.js";
import express from "express";

const app = express();
app.post("/", create);
app.get("/:id", get);
app.get("/", getAllProducts);
app.put("/:id", getProductByIdAndUpdate);
app.delete("/:id", getProductByIdAndDelete);

export default app;
