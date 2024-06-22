const express = require("express");
const router = express.Router();
const ClientInfoController=require('./client.controller')

router.get('/',ClientInfoController.getClientInfoController);
router.post('/',ClientInfoController.insertClientInfoController);
router.get('/:id',ClientInfoController.getClientInfoByIdController);
router.put('/:id',ClientInfoController.updateClientInformationController);
router.put('/',ClientInfoController.updateClientInformationStatusController);
router.delete('/:id',ClientInfoController.deleteClientInformationController);

module.exports=router