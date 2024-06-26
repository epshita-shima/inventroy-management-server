const PurchaseOrderInfoModel=require('./purchaseorderinfo.model')

async function getPurchaseOrderInfoDB(){
    try {
        const urchaseOrderData= await PurchaseOrderInfoModel.find();
        return urchaseOrderData;
      } catch (error) {
        console.error("Error fetching items unit:", error);
      }
}

async function insertPurchaseOrderInfoDB(purchaseOrderInfo){
    console.log(purchaseOrderInfo)
    try {
        return await PurchaseOrderInfoModel.insertMany(purchaseOrderInfo)
    } catch (error) {
        throw new Error("Error inserting items unit: " + error.message);
    }
}

module.exports={getPurchaseOrderInfoDB,insertPurchaseOrderInfoDB}