import jwt from 'jsonwebtoken';
import User, { IUser } from './models';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key';

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

  // Login user
export const loginUser = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ token });
    } catch (err) {
      return res.status(500).json({ error: 'Server error' });
    }
  };