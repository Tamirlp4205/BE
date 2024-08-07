import {db} from "../../db.js"

export const getRecord = async (req, res) => {
  const queryText = "SELECT * FROM record";
  try {
    const result = await db.query(queryText);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const createRecord = async (req, res) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;
  const queryText = `INSERT INTO record (user_id, name, amount, transaction_type, description, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

  try {
    const result = await db.query(queryText, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
export const updateRecord = async (req, res) => {
  const { id } = req.params;
  const { name, amount, transaction_type, description, category_id } = req.body;
  const queryText = `UPDATE record SET name = $1, amount = $2, transaction_type = $3, description = $4, category_id = $5 WHERE id = $6 RETURNING *`;

  try {
    const result = await db.query(queryText, [
      name,
      amount,
      transaction_type,
      description,
      category_id,
      id,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
export const deleteRecord = async (req, res) => {
  const queryText = "SELECT * FROM category";
  try {
    const result = await db.query(queryText);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
