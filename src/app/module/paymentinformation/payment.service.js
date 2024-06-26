const PaymentInfoModel=require('./paymentinfo.model')


async function getIPaymentInfoDB(){
    try {
        const paymentInfo= await PaymentInfoModel.find();
        return paymentInfo;
      } catch (error) {
        console.error("Error fetching item size:", error);
      }
}
async function insertPaymentInfoDB(paymentData) {
    try {
      return await PaymentInfoModel.insertMany(paymentData);
    } catch (error) {
      throw new Error("Error inserting payment info Data: " + error.message);
    }
}

module.exports={getIPaymentInfoDB,insertPaymentInfoDB}