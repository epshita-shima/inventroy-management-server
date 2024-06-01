const ItemsizeModal = require("./itemsize.model");

async function getItemSizesDB(){
    try {
        const itemsizes = await ItemsizeModal.find();
        console.log('itemsizes get data',itemsizes);
        return itemsizes;
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
}
async function insertItemSizesDB(itemssize) {
    try {
      return await ItemsizeModal.insertMany(itemssize);
    } catch (error) {
      throw new Error("Error inserting menu items: " + error.message);
    }
  }

  module.exports = {
    getItemSizesDB,
    insertItemSizesDB

  }