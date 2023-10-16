const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');
const isEmployed = require('../middlewares/isEmployed');

router.get('/', orderController.getAll);

router.post('/', isEmployed, orderController.createOrder);

router.delete('/:id',isEmployed, orderController.deleteOrder);
module.exports = router;