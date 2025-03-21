const { Router } = require('express')
const authMiddleware = require('../middleware/auth')
const { addBookmark, removeBookmark, getBookmark } = require('../controllers/bookmark')

const bookmarkRoutes = Router()

bookmarkRoutes.post('/add-bookmark/:quesid', authMiddleware, addBookmark)
bookmarkRoutes.put('/remove-bookmark/:quesid', authMiddleware, removeBookmark)
bookmarkRoutes.get('/bookmark', authMiddleware, getBookmark)

module.exports = bookmarkRoutes