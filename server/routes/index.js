const { Router } = require('express');
const userRoutes = require('./user');
const authRoutes = require('./auth');
const bookmarkRoutes = require('./bookmark');
const rootRouter = Router();


rootRouter.use('/auth', authRoutes);
rootRouter.use('/user', userRoutes);
rootRouter.use('/question', bookmarkRoutes);

module.exports = rootRouter;