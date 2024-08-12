import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  
  filterUser
} from "../controller/users.js";

const users = express.Router();

users
  .get("/", getUsers)
  .post("/create", createUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser)
  // .get("/:id" , singleUser)
  .get("/filteruser" , filterUser )

export  { users };
