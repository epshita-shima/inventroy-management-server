const express = require("express");
const router = express.Router();
const menuItemController = require("./menu.controller");

router.get('/',menuItemController.getMenuItems)
router.post('/update/menu',menuItemController.updateMenuItems)
router.post('/create/menu',menuItemController.createMenuItems)
router.get('/singlemenu/:id',menuItemController.getMenuById)
router.put('/updatesingle-menu',menuItemController.updatedSingleMenuItems)
router.put('/singlemenu/singleupdate/:id',menuItemController.updateSinglePortionMenuUpdate)

module.exports=router