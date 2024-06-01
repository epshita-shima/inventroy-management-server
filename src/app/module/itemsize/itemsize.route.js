const express = require("express");
const router = express.Router();
const itemSizeController = require("./itemsize.controller");
router.get('/',itemSizeController.getItemSizeController)
router.post('/',itemSizeController.createItemsizeController);
module.exports=router

