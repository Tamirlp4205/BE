import { createUser, getUserEmail } from "./users.js";

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
    const user = await getUserEmail(req, res);
    if (password === user[0].password) {
      res.status(200).json({ success: true, user: user });
    } else {
      res.status(200).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};