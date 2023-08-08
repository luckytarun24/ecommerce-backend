import {
  create,
  get,
  getOrderByUser,
  getOrderByIdAndUpdate,
  getOrderByIdAndDelete,
} from "../controllers/order/index.js";
import express from "express";

const app = express();

app.post("/", create);
app.get("/:id", get);
app.get("/", getOrderByUser);
app.put("/:id", getOrderByIdAndUpdate);
app.delete("/:id", getOrderByIdAndDelete);

export default app;
