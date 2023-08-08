
import { create, get, getUserByIdAndUpdate, getUserByIdAndDelete } from "../controllers/users/index.js"
import express from 'express';

const app = express({ mergeParams: true })

app.post("/", create)
app.get("/:id", get)
app.put("/:id", getUserByIdAndUpdate)
app.delete("/:id", getUserByIdAndDelete)

export default app;