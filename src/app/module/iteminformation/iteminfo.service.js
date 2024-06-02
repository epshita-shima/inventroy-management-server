const ItemInfoModel=require('./iteminfo.model')

async function getItemInfoDB(){
    try {
        const itemInfoData= await ItemInfoModel.find();
        return itemInfoData;
      } catch (error) {
        console.error("Error fetching items unit:", error);
      }
}


async function insertItemInfotDB(itemunit){
    try {
        return await ItemInfoModel.insertMany(itemunit)
    } catch (error) {
        throw new Error("Error inserting items: " + error.message);
    }
}

async function getItemInfoByIdDB(id) {
    try {
      const singleItem = await ItemInfoModel.findById(id);
      console.log(singleItem)
        return singleItem;
    } catch (error) {
      console.error(error);
      throw new Error("Internal server error from service");
    }
  };
module.exports={getItemInfoDB,insertItemInfotDB,getItemInfoByIdDB}