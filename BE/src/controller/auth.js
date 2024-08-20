import bcrypt from 'bcrypt';
import { createUser, getUserByEmail } from './users.js';



export const Signup = async (req, res) => {
  try {
    await createUser(req, res);
  } catch (error) {
    return res.send(error);
  }
};
export const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ error: 'Email and password are required' });
  }
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
      return res.send({ success: true, user : user});
    } else {
      return res.status(401).send({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).send({ error: 'Failed to authenticate user' });
  }
};



