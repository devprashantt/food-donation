import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function signUp(req, res) {
    const { email, password, name, number } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Salt
        const salt = await bcrypt.genSalt();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user in the database
        const newUser = await User.create({ email, password: hashedPassword, name, number });

        // Generate a JWT token
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ newUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ existingUser, token, message: 'User signed in successfully', success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


