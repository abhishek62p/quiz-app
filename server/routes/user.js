const { Router } = require('express')
const authMiddleware = require('../middleware/auth')
const { updateProfilePicture, deleteProfilePicture, getUserProfile, deleteUser } = require('../controllers/user')
const uplaod = require('../middleware/multerConfig')

const userRouter = Router()

userRouter.post('/profile/upload-picture', authMiddleware, uplaod.single('profilePicture'), updateProfilePicture)
userRouter.delete('/profile/delete-picture', authMiddleware, deleteProfilePicture)
userRouter.get('/profile', authMiddleware, getUserProfile)
userRouter.delete('/profile/delete-user', authMiddleware, deleteUser)

module.exports = userRouter