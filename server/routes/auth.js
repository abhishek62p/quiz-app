const { Router } = require('express');
const { signup, signin } = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');
const { createQue, getQues, updateQue, deleteQues } = require('../controllers/que');
const userRouter = Router();

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

userRouter.post('/signup', signup)
userRouter.post('/signin', signin)
userRouter.post('/question',authMiddleware, createQue)
userRouter.get('/question',authMiddleware, getQues)
userRouter.put('/question/update/:id',authMiddleware, updateQue)
userRouter.delete('/question/delete/:quesid',authMiddleware, deleteQues)

module.exports = userRouter;