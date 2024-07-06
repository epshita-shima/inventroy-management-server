const express = require("express");
const router = express.Router();

const GoodsReceiveNoteInfoController = require("./grninfo.controller");
router.post('/',GoodsReceiveNoteInfoController.insertGoodsReceiveNoteInfoController);
module.exports=router