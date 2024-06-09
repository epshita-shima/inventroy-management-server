const express = require("express");
const router = express.Router();

const ItemInfoController = require("./iteminfo.controller");

router.get('/',ItemInfoController.getItemInfoController);
router.post('/',ItemInfoController.insertItemInfoController);
router.get('/:id',ItemInfoController.getItemInfoByIdController);
router.put('/:id',ItemInfoController.updateItemInformationController);
router.put('/',ItemInfoController.updateItemInformationStatusController)
router.delete('/:id',ItemInfoController.deleteItemInformationController);

module.exports=router