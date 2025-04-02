const { Router } = require('express');
const userRoutes = require('./user');
const authRoutes = require('./auth');
const bookmarkRoutes = require('./bookmark');
const quesRouter = require('./ques');
const quizRouter = require('./quiz');
const rootRouter = Router();

rootRouter.use('/auth', authRoutes);
rootRouter.use('/user', userRoutes);
rootRouter.use('/question', quesRouter);
rootRouter.use('/question', bookmarkRoutes);
rootRouter.use('/quiz', quizRouter);

module.exports = rootRouter;