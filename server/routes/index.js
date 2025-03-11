const { Router } = require('express');
const userRouter = require('./auth');
const rootRouter = Router();


rootRouter.use('/auth', userRouter)

module.exports = rootRouter;