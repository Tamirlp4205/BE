import {db} from "../../db.js"
import bcrypt from "bcrypt";

export  const getUsers =  async (req, res) => {
    const queryText = "SELECT * FROM users";
    try {
      const result = await db.query(queryText);
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };
  
  export const createUser = async (req, res) => {
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
  
  export  const deleteUser = async (req, res) => {
    const { id } = req.params;
    const queryText = "DELETE FROM users WHERE id = $1";
    try {
      await db.query(queryText, [id]);
      res.send("User deleted successfully");
    } catch (err) {
      console.error(err);
      res.status(404).json({ error: "Database error" });
    }
  };

  export const getUserEmail = async (req, res) => {
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
  
 export  const updateUser =  async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const queryText = `UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *`;
  
    try {
      const result = await db.query(queryText, [name, email, id]);
      res.status(200).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  };

  // export const singleUser = async (req, res) => {
  //   const { id } = req.params;
  //   const queryText = "SELECT * FROM users WHERE id = $1";
  //   try {
  //     const result = await db.query(queryText, [id]);
  //     if (result.rows.length === 0) {
  //       res.status(404).json({ error: "User not found" });
  //     } else {
  //       res.status(200).json(result.rows[0]);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Database error" });
  //   }
  // };
  export const filterUser = async (req, res) => {
    let body = req.body;
    let {query} = body ;
    delete body.query ;
    
    let queryText = ` SELECT * FROM users `;
    queryText =queryText + query
    try {
        const result = await db.query(queryText, [...Object.values(body)]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: "User not found" });
        } else {
            res.status(200).json(result.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};
