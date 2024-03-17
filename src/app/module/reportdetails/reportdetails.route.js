const express = require('express');
const router = express.Router();
const companyService = require('./reportdetails.controller');

router.post('/',companyService.saveCompany);
router.get('/company', companyService.getAllCompanies);
module.exports = router;