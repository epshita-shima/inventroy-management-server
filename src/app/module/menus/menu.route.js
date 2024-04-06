const express = require("express");
const router = express.Router();
const menuItemController = require("./menu.controller");

router.get('/',menuItemController.getMenuItems)
router.post('/update/menu',menuItemController.updateMenuItems)
router.post('/create/menu',menuItemController.createMenuItems)
module.exports=router