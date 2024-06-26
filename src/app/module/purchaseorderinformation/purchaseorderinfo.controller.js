const PurchaseOrderInfoService=require('./purchaseorderinfo.service');


async function  getPurchaseOrderInfoController(req, res, next) {
    const data = req.body;
    const POData = await PurchaseOrderInfoService.getPurchaseOrderInfoDB(data);
    res.json(POData);
  };
async function insertPurchaseOrderInfoController(req, res) {
    try {
      const insertedPO = await PurchaseOrderInfoService.insertPurchaseOrderInfoDB(req.body);
      res.status(200).json(insertedPO);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports={getPurchaseOrderInfoController,insertPurchaseOrderInfoController}