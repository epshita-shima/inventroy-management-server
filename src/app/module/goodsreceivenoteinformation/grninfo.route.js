const express = require("express");
const router = express.Router();

const GoodsReceiveNoteInfoController = require("./grninfo.controller");
router.get('/',GoodsReceiveNoteInfoController.getGoodsReceiveNoteInfoController);
router.get('/filtered',GoodsReceiveNoteInfoController.getFilteredGoodsReceiveNoteInfoController);
router.post('/',GoodsReceiveNoteInfoController.insertGoodsReceiveNoteInfoController);
router.get('/:id',GoodsReceiveNoteInfoController.getGoodsReceiveNoteInfoByIdController);
router.put('/:id',GoodsReceiveNoteInfoController.updateGoodsReceiveNoteInfoController);
router.delete('/:id',GoodsReceiveNoteInfoController.deleteGoodsReceiveNoteInfoController);
module.exports=router