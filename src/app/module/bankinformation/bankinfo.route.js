const express = require("express");
const router = express.Router();
const BankInfoController = require("./bankinfo.controller");

router.get('/',BankInfoController.getBankInfoController)
router.post('/',BankInfoController.inserBankInfoController);

module.exports=router
