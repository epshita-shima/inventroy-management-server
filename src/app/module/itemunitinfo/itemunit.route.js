const express = require("express");
const router = express.Router();
const itemUnitController = require("./itemunit.controller");

router.get('/',itemUnitController.getItemUnitController)
router.post('/',itemUnitController.insertItemUnitController);

module.exports=router