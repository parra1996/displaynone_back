const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');
const isEmployed = require('../middlewares/isEmployed');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', UserController.getAll);

router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.put('/:id',isEmployed, UserController.updateUser);

router.delete('/:id', isEmployed, isAdmin, UserController.deleteUser);

module.exports = router;