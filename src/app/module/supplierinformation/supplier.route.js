const express = require("express");
const router = express.Router();
const SupplierInfoController=require('./supplier.controller')

router.get('/',SupplierInfoController.getSupplierInfoController);
router.post('/',SupplierInfoController.insertSupplierInfoController);
router.get('/:id',SupplierInfoController.getSupplierInfoByIdController)
router.put('/:id',SupplierInfoController.updateSupplierInformationController)

module.exports=router