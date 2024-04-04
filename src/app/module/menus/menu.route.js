const express = require("express");
const router = express.Router();
const menuItemController = require("./menu.controller");

router.get('/',menuItemController.getMenuItems)
router.put('/insert/menu',menuItemController.insertMenuItems)
module.exports=router