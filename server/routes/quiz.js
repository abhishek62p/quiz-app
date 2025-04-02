const Router = require('express');
const authMiddleware = require('../middleware/auth');
const { createQuizzes, updateQuizzes, getQuizQues } = require('../controllers/quiz')
const quizRouter = Router();

quizRouter.post('/create-quiz', authMiddleware, createQuizzes)
quizRouter.put('/update-quiz', authMiddleware, updateQuizzes)
quizRouter.get('/get-ques/:quizId', authMiddleware, getQuizQues)
quizRouter.delete('/delete-quiz')

module.exports = quizRouter;