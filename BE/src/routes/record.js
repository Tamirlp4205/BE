import express from "express";
import {
  getRecord,
  createRecord,
  updateRecord,
  deleteRecord,
} from "../controller/record.js";

const record = express.Router();

record
  .get("/", getRecord)
  .post("/create", createRecord)
  .put("/:id", updateRecord)
  .delete("/:id", deleteRecord);

export { record };
