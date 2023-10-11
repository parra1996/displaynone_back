const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController')

router.get('/', UserController.getAll);

router.post('/register', UserController.register);

router.put('/:id', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);
module.exports = router;