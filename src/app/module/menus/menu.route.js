const express = require("express");
const router = express.Router();
const menuItemController = require("./menu.controller");

router.get('/',menuItemController.getMenuItems)
module.exports=router