import { createUser, getUserEmail } from "./users.js";
import bcrypt from "bcrypt";
 

export const signUp = async (req, res) => {
  const { password, email } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await saveUser({ email, password: hashedPassword });
    res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
 
export const signIn = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await getUserEmail(email);
    if (users.length > 0) {
      const match = await bcrypt.compare(password, users[0].password);
      if (match) {
        res.status(200).json({ success: true, user: user });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};