const { Router } = require('express');
const { signup, signin, getUsers } = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');
const userRouter = Router();

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.get('/getuser',authMiddleware, getUsers)

module.exports = userRouter;