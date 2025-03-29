const { Router } = require('express')
const authMiddleware = require('../middleware/auth')
const { createQue, getQues, updateQue, deleteQues, getRandomQues, submitQuiz, getScore } = require('../controllers/ques')
const uplaod = require('../middleware/multerConfig')
const updateProfilePicture = require('../controllers/user')

const quesRouter = Router()

quesRouter.post('/create-ques', authMiddleware, createQue)
quesRouter.get('/', authMiddleware, getQues)
quesRouter.put('/update-ques/:id',authMiddleware, updateQue)
quesRouter.delete('/delete-ques/:quesid',authMiddleware, deleteQues)
quesRouter.get('/random-ques', getRandomQues)
quesRouter.post('/submit-ques', authMiddleware, submitQuiz)
quesRouter.get('/get-score', authMiddleware, getScore)

module.exports = quesRouter