const Router = require('express');
const authMiddleware = require('../middleware/auth');
const { createQuizzes, updateQuizzes, getQuizQues, removeQues, deleteQuiz, getQuiz } = require('../controllers/quiz')
const quizRouter = Router();

quizRouter.post('/create-quiz', authMiddleware, createQuizzes)
quizRouter.put('/update-quiz/:quizId', authMiddleware, updateQuizzes)
quizRouter.get('/get-quiz', getQuiz)
quizRouter.get('/start/:quizId', authMiddleware, getQuizQues)
quizRouter.delete('/delete-quiz', authMiddleware, deleteQuiz)
quizRouter.post('/remove-ques', authMiddleware, removeQues)

module.exports = quizRouter;