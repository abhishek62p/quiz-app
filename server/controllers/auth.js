const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken')
const { User } = require('../models/user')

const signup = async (req, res) => {
    const { username, firstname, lastname, password } = req.body;

    const existingUser = await User.findOne({
        username: username
    });
    if (existingUser) {
        return res.status(411).json({
            msg: 'User is already exist',

        })
    }
    try {
        const newUser = await User.create({
            username: username,
            firstname: firstname,
            lastname: lastname,
            password: password
        })

        console.log(newUser);
        const token = jwt.sign({
            userId: newUser._id
        }, JWT_SECRET, { expiresIn: '12h' });
        res.status(201).json({
            msg: "User Created successfully",
            newUser: newUser,
            token: token
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Internal Server Error',
            error: error.name
        })
        console.log(error.name);
    }
}

const signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({
        username: username
    })
    if (!user) {
        return res.status(404).json({
            msg: 'User does not exist'
        })
    }
    try {
        if(password === user.password) {
            const token = jwt.sign({
                userId: user._id
            }, JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({
                msg: "User Sign In successfully",
                user: user,
                token: token
            })
            console.log('token: ', token);
            console.log(user); 
        } else {
            return res.status(401).json({
                msg: 'Incorrect password'
            })
        }
    } catch (error) {
        res.status(500).json({
            msg: 'Internal Server Error',
            error: error.name
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({
            msg: "Getting all users data successfully",
            users: allUsers
        })
    } catch(error) {
        return res.status(500).json({
            msg: "Error fetching users",
            error: error.name
        })
    }
}

module.exports = {
    signup,
    signin,
    getUsers
}