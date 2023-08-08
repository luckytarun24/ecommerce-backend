import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
  userRoute,
  productRoute,
  authRoute,
  orderRoute,
  cartRoute,
} from "../src/routers/index.js";
import { middlewareVerifyToken } from "../src/utils/middleware.js";
import seed from "./seed.js";
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRoute);

// Seed default data upload.
app.get("/enterSeed", async (request, response) => {
  await seed();
  response.status(200).send({ message: "Data upload successfully" });
});

app.use(middlewareVerifyToken);

app.use("/user", userRoute);
app.use("/products", productRoute);
app.use("/order", orderRoute);
app.use("/cart", cartRoute);

export default app;
