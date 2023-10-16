const express = require('express');
const router = express.Router();

const CompanyController = require('../controllers/companyController');
const companyController = require('../controllers/companyController');
const isEmployed = require('../middlewares/isEmployed');

router.get('/', CompanyController.getAll);

router.post('/', companyController.registerCompany);

router.put('/:id', isEmployed, companyController.updateCompany);

router.delete('/:id', isEmployed, companyController.deleteCompany);

module.exports = router;