const PurchaseOrderInfoService = require("./purchaseorderinfo.service");

async function getPurchaseOrderInfoController(req, res, next) {
  const data = req.body;
  const POData = await PurchaseOrderInfoService.getPurchaseOrderInfoDB(data);
  res.json(POData);
}

async function insertPurchaseOrderInfoController(req, res) {
  try {
    const insertedPO = await PurchaseOrderInfoService.insertPurchaseOrderInfoDB(
      req.body
    );
    res.status(200).json(insertedPO);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getPurchaseOrderInfoByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const singlePurchaseOrderInfo =
      await PurchaseOrderInfoService.getPurchaseOrderInfoByIdDB(id);
    if (!singlePurchaseOrderInfo) {
      return res.status(404).json({ message: "Supplier info not found" });
    }
    return res.status(200).json(singlePurchaseOrderInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatePurchaseOrderInfoController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const updatePurchaseOrderData = req.body; // Assuming the updated data is sent in the request body
    console.log("updatedData", updatePurchaseOrderData);
    const result = await PurchaseOrderInfoService.updatePurchaseOrderInfoDB(
      id,
      updatePurchaseOrderData
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePurchaseOrderInfoStatusController = async (req, res) => {
  try {
    const result =
      await PurchaseOrderInfoService.updatePurchaseOrderInfoStatusDB(req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletePurchaseOrderInfoInformationController = async (req, res) => {
  const { id } = req.params;
  try {
    const poInfo = await PurchaseOrderInfoService.deletePurchaseOrderInfoDB(id);
    return res.status(200).json(poInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getPurchaseOrderInfoController,
  insertPurchaseOrderInfoController,
  getPurchaseOrderInfoByIdController,
  updatePurchaseOrderInfoController,
  updatePurchaseOrderInfoStatusController,
  deletePurchaseOrderInfoInformationController,
};
