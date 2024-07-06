const express = require("express");
const router = express.Router();
const POController = require("./purchaseorderinfo.controller");

router.get('/',POController.getPurchaseOrderInfoController);
router.post('/',POController.insertPurchaseOrderInfoController);
router.get('/:id',POController.getPurchaseOrderInfoByIdController)
router.put('/:id',POController.updatePurchaseOrderInfoController);
router.put('/',POController.updatePurchaseOrderInfoStatusController);
router.delete('/:id',POController.deletePurchaseOrderInfoInformationController)

module.exports=router