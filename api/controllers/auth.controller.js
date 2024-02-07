import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req, res, next) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
    });
    
    try {
        await newUser.save();
        res.status(201).json({
        message: 'User Created Successfully'
        });
    } catch (error) {
        // next(errorHandler(550, 'Custom error'));
        next(error);
    }
   
};