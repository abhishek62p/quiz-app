const { Router } = require('express');
const { signup, signin } = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

const authRoutes = Router();

authRoutes.post('/signup', signup)
authRoutes.post('/signin', signin)
authRoutes.get('/me', authMiddleware)

module.exports = authRoutes;