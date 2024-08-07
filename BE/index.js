import express, { application } from "express";
import cors from "cors";
import { db } from "./db.js";
import {users} from "./src/routes/users.js"
import {record} from "./src/routes/record.js"
import { category } from "./src/routes/category.js";
import {auth} from "./src/routes/auth.js"

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use('/users' , users) ;
app.use('/record' , record) ;
app.use('/category' , category) ;
app.use('/api' , auth) ;

app.get("/installExtension", async (req, res) => {
  const TableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
  try {
    await db.query(TableQueryText);
    res.send("Extension installed successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.get("/createTable", async (req, res) => {
  const TableQueryText = `
  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    password TEXT,
    avatar_image TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currency_type VARCHAR(3) DEFAULT 'USD' NOT NULL
  );`;
  try {
    await db.query(TableQueryText);
    res.send("Table created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.get("/createRecord", async (req, res) => {
  const TableQueryText = `
  CREATE TABLE IF NOT EXISTS record (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    users_id uuid NOT NULL   uuid REFERENCES users ON DELETED  RESTRICT ,
    category_id uuid NOT NULL,
    FOREIGN KEY (users_id)
    references "users"(id),
    FOREIGN KEY (category_id)
    references "category"(id),
    name TEXT,
    amount REAL NOT NULL,
    transaction_type transaction_type DEFAULT 'EXP' NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
  try {
    await db.query(TableQueryText);
    res.send("Table created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.get("/createCategory", async (req, res) => {
  const TableQueryText = `
   CREATE TABLE IF NOT EXISTS category (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    description TEXT,
    avatar_image TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_image TEXT
  );`;
  try {
    await db.query(TableQueryText);
    res.send("Table created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`my backend listening on port ${port}`);
});
