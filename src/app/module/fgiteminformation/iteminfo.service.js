const FinishGoodItemInfoModel = require("./iteminfo.model");

async function getItemInfoDB() {
  try {
    const itemInfoData = await FinishGoodItemInfoModel.find();
    return itemInfoData;
  } catch (error) {
    console.error("Error fetching items unit:", error);
  }
}

async function insertItemInfotDB(itemunit) {
  try {
    return await FinishGoodItemInfoModel.insertMany(itemunit);
  } catch (error) {
    throw new Error("Error inserting items: " + error.message);
  }
}

async function getItemInfoByIdDB(id) {
  try {
    const singleItem = await FinishGoodItemInfoModel.findById(id);
    console.log(singleItem);
    return singleItem;
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error from service");
  }
}

async function updateItemInformationDB(id, data) {
  try {
    const updatedItemInfo = await FinishGoodItemInfoModel.findByIdAndUpdate(
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

async function updateItemInformationStatusDB( data) {
  console.log('data',data)
  try {
    const promises = data?.map(async (updateStatus) => {
      // Update isactive field for each user
      const updatedStatusData = await FinishGoodItemInfoModel.findByIdAndUpdate(
        updateStatus._id,
        { itemStatus: updateStatus.itemStatus },
        { new: true }
      );
      return updatedStatusData;
    });
    const updatedStatusData = await Promise.all(promises);
    return updatedStatusData;
  } catch (error) {
    console.error("Error updating multiple users:", error);
    throw new Error("Failed to update multiple data");
  }
}



const deleteItemInformationDB = async (id) => {
  try {
    const deleteItemInfoData= await FinishGoodItemInfoModel.findByIdAndDelete(id);
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
  updateItemInformationStatusDB,
  deleteItemInformationDB
};
