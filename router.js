const router = require('express').Router();

const userRouter = require('./views/userRouter');
const orderRouter = require('./views/orderRouter');
const companyRouter = require('./views/companyRouter');

router.use('/users', userRouter);
router.use('/order', orderRouter);
router.use('/company', companyRouter);

module.exports = router;
