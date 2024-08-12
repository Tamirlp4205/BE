import {db} from "../../db.js"


export const filterCategory = async (req, res) => {
  let body = req.body;
  const { query } = body;
  delete body.query;
  let queryText = "SELECT * FROM category";
  queryText = queryText + query;
  try {
    const result = await db.query(queryText, [...Object.values(body)]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Category not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
export const createCategory = async (req, res) => {
  const { category_image, name,  description} = req.body;
  const queryText = `INSERT INTO category (name,   description, category_image) VALUES ($1, $2, $3) RETURNING *`;

  try {
    const result = await db.query(queryText, [
      name,
      description,
      category_image,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
export const getCategory = async (req, res) => {
  const queryText = "SELECT * FROM category";
  try {
    const result = await db.query(queryText);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, category_image } = req.body;
  const queryText = `UPDATE category SET name = $1,   description = $2, category_image = $3 WHERE id = $4 RETURNING *`;

  try {
    const result = await db.query(queryText, [
      name,
      description,
      category_image,
      id,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const queryText = "DELETE FROM category WHERE id = $1";
  try {
    await db.query(queryText, [id]);
    res.send("Category deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: "Database error" });
  }
};
