const express = require("express");
const router = express.Router();
const CategoryInfoController = require("./categoryinfo.controller");

router.get('/',CategoryInfoController.getCategoryInfoController)
router.post('/',CategoryInfoController.createCategoryInfoController);

module.exports=router
