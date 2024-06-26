const express = require("express");
const router = express.Router();
const POController = require("./purchaseorderinfo.controller");

router.get('/',POController.getPurchaseOrderInfoController);
router.post('/',POController.insertPurchaseOrderInfoController);

module.exports=router