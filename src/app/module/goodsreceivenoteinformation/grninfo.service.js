const GoodsReceiveNoteInfoModel = require("./grninfo.model");

async function insertGoodsReceiveNoteInfoDB(grnInfo) {
  try {
    return await GoodsReceiveNoteInfoModel.insertMany(grnInfo);
  } catch (error) {
    throw new Error("Error inserting grn info: " + error.message);
  }
}

module.exports = { insertGoodsReceiveNoteInfoDB };
