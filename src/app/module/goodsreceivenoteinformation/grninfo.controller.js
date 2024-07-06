const GoodsReceiveNoteService=require('./grninfo.service')
async function insertGoodsReceiveNoteInfoController(req, res) {
    try {
      const insertedGRN = await GoodsReceiveNoteService.insertGoodsReceiveNoteInfoDB(
        req.body
      );
      res.status(200).json(insertedGRN );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  module.exports={insertGoodsReceiveNoteInfoController}