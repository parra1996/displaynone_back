const router = require('express').Router();

const userRouter = require('./views/userRouter')

router.use('/users', userRouter)

module.exports = router
