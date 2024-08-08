import bcrypt from "bcrypt";
import {db} from "../../db.js"
 
 const getUserEmail = async (req, res) => {
  const { email } = req.body;

  const queryText = `
    SELECT email, password FROM users WHERE email = $1
    `;
  try {
    const result = await db.query(queryText, [email]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
};

 const createUser = async (req, res) => {
  const { email, name, password, avatar_image, currency_type } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const queryText = `
      INSERT INTO users (email, name, password, avatar_image, currency_type)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`;
    const result = await db.query(queryText, [
      email,
      name,
      hashedPassword, 
      avatar_image,
      currency_type,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};

export const signUp = async (req, res) => {
  try {
    const user = await createUser(req, res);
    res.status(200).json({ success: true, user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};



export const signIn = async (req, res) => {
  const { password, email } = req.body;

  try {
    const queryText = `
      SELECT * FROM "users" WHERE email = $1
    `;
    const users = await db.query(queryText, [email]);

    if (users.rows.length === 0) {
      return res.status(400).send({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, users.rows[0].password);

    if (isMatch) {
      res.send({ success: true, users: users.rows[0] });
    } else {
      res.status(400).send({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};


