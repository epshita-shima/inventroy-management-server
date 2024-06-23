const express = require("express");
const router = express.Router();
const CFTInfoController = require("./cft.controller");
const upload=require('../multer/configuration')

router.get('/',CFTInfoController.getCFTInfoController);
router.post('/',upload.single('image'),CFTInfoController.insertCFTInfoController);
router.get('/:id',CFTInfoController.getCFTInfoByIdController);
router.put('/:id',upload.single('image'),CFTInfoController.updateCFTInfoController);
router.put('/',CFTInfoController.updateCFTInfoStatusController);
router.delete('/:id',CFTInfoController.deleteCFTInfoController);

module.exports=router
