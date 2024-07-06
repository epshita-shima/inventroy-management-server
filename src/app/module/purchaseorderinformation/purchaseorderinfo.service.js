const PurchaseOrderInfoModel = require("./purchaseorderinfo.model");

async function getPurchaseOrderInfoDB() {
  try {
    const urchaseOrderData = await PurchaseOrderInfoModel.find();
    return urchaseOrderData;
  } catch (error) {
    console.error("Error fetching items unit:", error);
  }
}

async function insertPurchaseOrderInfoDB(purchaseOrderInfo) {
  console.log(purchaseOrderInfo);
  try {
    return await PurchaseOrderInfoModel.insertMany(purchaseOrderInfo);
  } catch (error) {
    throw new Error("Error inserting items unit: " + error.message);
  }
}

async function getPurchaseOrderInfoByIdDB(id) {
  try {
    const singlePurchaseOrderInfo = await PurchaseOrderInfoModel.findById(id);
    console.log(singlePurchaseOrderInfo);
    return singlePurchaseOrderInfo;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

async function updatePurchaseOrderInfoDB(id, data) {
  try {
    const updatePurchaseOrderInfo =
      await PurchaseOrderInfoModel.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );
    if (updatePurchaseOrderInfo) {
      return updatePurchaseOrderInfo;
    } else {
      console.log("No matching document found for ID:", id);
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

async function updatePurchaseOrderInfoStatusDB(updateStatus) {
  console.log(updateStatus,updateStatus._id)
  try {
    const updatedStatusData = await PurchaseOrderInfoModel.findByIdAndUpdate(
      updateStatus._id,
      { approveStatus: true },
      { new: true }
    );
    return updatedStatusData;
  } catch (error) {
    console.error("Error updating multiple users:", error);
    throw new Error("Failed to update multiple data");
  }
}

const deletePurchaseOrderInfoDB = async (id) => {
  try {
    const deletePOInfoData = await PurchaseOrderInfoModel.findByIdAndDelete(id);
    console.log(deletePOInfoData, "delete");
    if (!deletePOInfoData) {
      throw new Error("PO info not found");
    }
    return deletePOInfoData;
  } catch (error) {
    throw new Error("Internal server error");
  }
};
module.exports = {
  getPurchaseOrderInfoDB,
  insertPurchaseOrderInfoDB,
  getPurchaseOrderInfoByIdDB,
  updatePurchaseOrderInfoDB,
  updatePurchaseOrderInfoStatusDB,
  deletePurchaseOrderInfoDB,
};
