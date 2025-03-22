const { Router } = require('express')
const authMiddleware = require('../middleware/auth')
const { createQue, getQues, updateQue, deleteQues } = require('../controllers/que')
const uplaod = require('../middleware/multerConfig')
const updateProfilePicture = require('../controllers/user')

const userRoutes = Router()

userRoutes.post('/question', authMiddleware, createQue)
userRoutes.get('/question', authMiddleware, getQues)
userRoutes.put('/question/update/:id',authMiddleware, updateQue)
userRoutes.delete('/question/delete/:quesid',authMiddleware, deleteQues)
userRoutes.post('/profile', authMiddleware, uplaod.single('profilePicture'), updateProfilePicture)

module.exports = userRoutes