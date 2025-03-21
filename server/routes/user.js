const { Router } = require('express')
const authMiddleware = require('../middleware/auth')
const { createQue, getQues, updateQue, deleteQues } = require('../controllers/que')

const userRoutes = Router()

userRoutes.post('/question', authMiddleware, createQue)
userRoutes.get('/question', authMiddleware, getQues)
userRoutes.put('/question/update/:id',authMiddleware, updateQue)
userRoutes.delete('/question/delete/:quesid',authMiddleware, deleteQues)

module.exports = userRoutes