import express from 'express';
import { Signup ,Login } from '../controller/Auth.js';

const auth = express.Router();

auth.post('/signup', Signup).post('/login', Login);

export { auth };
