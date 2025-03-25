const { Router } = require('express')
const authMiddleware = require('../middleware/auth')
const { createQue, getQues, updateQue, deleteQues, getRandomQues } = require('../controllers/ques')
const uplaod = require('../middleware/multerConfig')
const updateProfilePicture = require('../controllers/user')

const quesRouter = Router()

quesRouter.post('/question', authMiddleware, createQue)
quesRouter.get('/question', authMiddleware, getQues)
quesRouter.put('/question/update/:id',authMiddleware, updateQue)
quesRouter.delete('/question/delete/:quesid',authMiddleware, deleteQues)
quesRouter.get('/question/random', getRandomQues)

module.exports = quesRouter