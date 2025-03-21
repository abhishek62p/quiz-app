const { Router } = require('express');
const userRoutes = require('./auth');
const authRoutes = require('./auth');
const rootRouter = Router();


rootRouter.use('/auth', authRoutes);
rootRouter.use('/user', userRoutes);

module.exports = rootRouter;