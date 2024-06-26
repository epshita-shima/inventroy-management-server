const PaymentInfoService = require("./payment.service");

const getPaymentInfoController = async (req, res, next) => {
  const data = req.body;
  const paymentInfoData = await PaymentInfoService.getIPaymentInfoDB(data);
  res.json(paymentInfoData);
};

const createPaymentInfoController = async (req, res, next) => {
  try {
    const data = req.body;
    const paymentInfoData = await PaymentInfoService.getIPaymentInfoDB(data);
    var result = paymentInfoData.filter(function (paymentGetData) {
      return data.some(function (insertData) {
        return paymentGetData.paymentType.toLowerCase() === insertData.paymentType.toLowerCase(); // return the ones with equal id
      });  
    });

    if (result.length !==0) {
      return res.status(400).json({
        status: "error",
        message: " Same Type payment info already exists",
      });
    } 
    if(result.length==0) {
      const paymentType = await PaymentInfoService.insertPaymentInfoDB(data);
      res.status(200).json({
        status: "success",
        data: paymentType,
      });
    }
  } catch (error) {
    if (error.message === "Payment with the same Type already exists") {
      return res.status(400).json({
        status: "error",
        message: "Payment with the same Type already exists",
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Failed to save data to the database",
      });
    }
  }
};

module.exports = { getPaymentInfoController, createPaymentInfoController };
