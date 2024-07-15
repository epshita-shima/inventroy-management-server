const GoodsReceiveNoteInfoModel = require("./grninfo.model");
const PurchaseOrderInfoModel = require("../purchaseorderinformation/purchaseorderinfo.model");
async function getGoodsReceiveNoteInfoDB() {
  try {
    const grnInfo = await GoodsReceiveNoteInfoModel.find();
    return grnInfo;
  } catch (error) {
    console.error("Error fetching item size:", error);
  }
}

async function insertGoodsReceiveNoteInfoDB(grnInfo) {
  try {
    return await GoodsReceiveNoteInfoModel.insertMany(grnInfo);
  } catch (error) {
    throw new Error("Error inserting grn info: " + error.message);
  }
}

async function getGoodsReceiveNoteInfoByIdDB(id) {
  try {
    const singleGRNInfo = await GoodsReceiveNoteInfoModel.findById(id);
    console.log(singleGRNInfo);
    return singleGRNInfo;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

async function getFilteredGRNDataInformationDB(supplierPONo, supplierId, fromDate, toDate, selectMonth) {
  
  try {
    const filter = {};

    if (supplierPONo) {
      filter.supplierPoNo = supplierPONo;
    }
    if (supplierId) {
      filter.supplierId = supplierId;
    }
    if (fromDate && toDate) {
      filter.receiveDate = { $gte: new Date(fromDate), $lte: new Date(toDate) };
    } else if (selectMonth) {
      let dateRanges = [];
      try {
        dateRanges = JSON.parse(selectMonth).map(month => ({
          start: new Date(month.start),
          end: new Date(month.end)
        }));
      } catch (error) {
        console.error("Error parsing selectMonth:", error);
        throw new Error("Invalid selectMonth format");
      }
      
      filter.$or = dateRanges.map(range => ({
        receiveDate: { $gte: range.start, $lte: range.end }
      }));
    }

    const data = await GoodsReceiveNoteInfoModel.find(filter);
    console.log(data); // Verify data structure before returning

    return data;
  } catch (error) {
    console.error(error);
   
  }
}

async function updateGoodsReceiveNoteInfoDB(id, data) {
  console.log(data);
  try {
    const updateGRNInfo = await GoodsReceiveNoteInfoModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    if (updateGRNInfo) {
      return updateGRNInfo;
    } else {
      console.log("No matching document found for ID:", id);
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}
const deleteGoodsReceiveNoteInfoDB = async (id) => {
  try {
    const deleteGRNInfoData = await GoodsReceiveNoteInfoModel.findByIdAndDelete(
      id
    );
    console.log(deleteGRNInfoData, "delete");
    if (!deleteGRNInfoData) {
      throw new Error("GRN info not found");
    }
    return deleteGRNInfoData;
  } catch (error) {
    throw new Error("Internal server error");
  }
};
module.exports = {
  getGoodsReceiveNoteInfoDB,
  getFilteredGRNDataInformationDB,
  insertGoodsReceiveNoteInfoDB,
  getGoodsReceiveNoteInfoByIdDB,
  updateGoodsReceiveNoteInfoDB,
  deleteGoodsReceiveNoteInfoDB,
};
