import express from "express";
import { signIn, signUp } from "../controller/auth.js";

const app = express();

const auth = express.Router();
app.use(express.urlencoded({ extended: true }));

auth.post("/signUp", signUp).post("/signIn", signIn);

export { auth };
 