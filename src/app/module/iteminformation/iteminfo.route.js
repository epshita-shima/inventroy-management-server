const express = require("express");
const router = express.Router();

const itemInfoController = require("./iteminfo.controller");

router.get('/',itemInfoController.getItemInfoController)
router.post('/',itemInfoController.insertItemInfoController);
router.get('/:id',itemInfoController.getItemInfoByIdController)

module.exports=router