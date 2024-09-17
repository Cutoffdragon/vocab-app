import { Router } from 'express';
import User from './models';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();

const jwtSecret = process.env['JWT_SECRET']!

router.post('/register', async (req, res) => {
    let { username, password } = req.body;

    try {
        let findExistingUser = await User.findOne({ username })
        if (findExistingUser) {
            return res.status(400).json({ message: 'Sorry, that username is taken. Please try a different name.' })
        }

        const newUser = new User({ username, password });
        await newUser.save();

        return res.status(201).json({ message: 'Registration successful. Welcome to Vocabulary Mogul!' })
    } catch (err: any) {
        return res.status(500).json({ message: 'Registration failed.', error: err.message })
    }
})

router.post('/login', async (req, res) => {

    const { username, password } = req.body;

    try {

        const user : any = await User.findOne({ username });

        if (!user) {
            res.status(400).json({ message: 'Invalid Username or Password' })
        }

        const matchPass = await bcrypt.compare(password, user.password);

        if (!matchPass) {
            res.status(400).json({ message: 'Invalid Password' })
        }

        const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

        return res.status(200).json({ token, user: { id: user._id, username: user.username } });

    } catch(err: any) {
        return res.status(500).json({ message: 'Log In failed.', error: err.message })
    }
})