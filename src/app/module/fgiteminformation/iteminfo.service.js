const ItemInfoModel = require("./iteminfo.model");

async function getItemInfoDB() {
  try {
    const itemInfoData = await ItemInfoModel.find();
    return itemInfoData;
  } catch (error) {
    console.error("Error fetching items unit:", error);
  }
}

async function insertItemInfotDB(itemunit) {
  try {
    return await ItemInfoModel.insertMany(itemunit);
  } catch (error) {
    throw new Error("Error inserting items: " + error.message);
  }
}

async function getItemInfoByIdDB(id) {
  try {
    const singleItem = await ItemInfoModel.findById(id);
    console.log(singleItem);
    return singleItem;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

async function updateItemInformationDB(id, data) {
  try {
    const updatedItemInfo = await ItemInfoModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
    if (updatedItemInfo) {
      return updatedItemInfo;
    } else {
      console.log("No matching document found for ID:", id);
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

const deleteItemInformationDB = async (id) => {
  try {
    const deleteItemInfoData= await ItemInfoModel.findByIdAndDelete(id);
    console.log(deleteItemInfoData, "delete");
    if (!deleteItemInfoData) {
      throw new Error("Item not found");
    }
    return deleteItemInfoData;
  } catch (error) {
    throw new Error("Internal server error");
  }
};
module.exports = {
  getItemInfoDB,
  insertItemInfotDB,
  getItemInfoByIdDB,
  updateItemInformationDB,
  deleteItemInformationDB
};
