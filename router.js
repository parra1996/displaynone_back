const router = require('express').Router();

const userRouter = require('./views/userRouter');
const clientRouter = require('./views/clientRouter');
const orderRouter = require('./views/orderRouter');
const companyRouter = require('./views/companyRouter');

router.use('/users', userRouter);
router.use('/client', clientRouter);
router.use('/order', orderRouter);
router.use('/company', companyRouter);

module.exports = router;
