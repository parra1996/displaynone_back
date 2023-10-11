const express = require('express');
const router = express.Router();

const CompanyController = require('../controllers/companyController');
const companyController = require('../controllers/companyController');

router.get('/', CompanyController.getAll);

router.post('/', companyController.registerCompany);

router.put('/:id', companyController.updateCompany);

router.delete('/:id', companyController.deleteCompany);

module.exports = router;