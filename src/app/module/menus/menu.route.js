const express = require("express");
const router = express.Router();
const menuItemController = require("./menu.controller");

router.get('/',menuItemController.getMenuItems)
router.post('/update/menu',menuItemController.updateMenuItems)
router.post('/create/menu',menuItemController.createMenuItems)
router.get('/singlemenu/:id',menuItemController.getMenuById)
router.get('/singlemenu/changingparent/:id',menuItemController.getMenuChangingParentById)
router.put('/updatesingle-menu',menuItemController.updatedSingleMenuItems)
router.put('/singlemenu/singleupdate/:id',menuItemController.updateSinglePortionMenuUpdate)
router.post('/updatenesteditems/menu',menuItemController.updateMenuNestedItemsController)
router.delete('/deletemenu/:id',menuItemController.deleteMenuController)
module.exports=router