import express from "express";
import {
    getCategory,
  createCategory ,
  updateCategory,
  deleteCategory,
  filterCategory
} from "../controller/category.js";

const category = express.Router();

category
  .get("/", getCategory)
  .post("/create", createCategory)
  .put("/:id", updateCategory)
  .delete("/:id", deleteCategory)
  .get("/filterCategory" , filterCategory)

export { category };
