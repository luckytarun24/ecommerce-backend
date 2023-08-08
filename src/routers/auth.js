
import { signup, login } from "../controllers/auth/index.js"
import express from 'express';

const app = express()
app.post("/login", login)
app.post("/signup", signup)

export default app;