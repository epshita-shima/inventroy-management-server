const BankInfoService = require("./bankinfo.service");

const getBankInfoController = async (req, res, next) => {
  const data = req.body;
  const bankInfoData = await BankInfoService.getIBankInfoDB(data);
  res.json(bankInfoData);
};

const inserBankInfoController = async (req, res, next) => {
  try {
    const data = req.body;
    const bankInfoData = await BankInfoService.getIBankInfoDB(data);
    var result = bankInfoData.filter(function (bankInfoGetData) {
      return data.some(function (insertData) {
        return bankInfoGetData.accountNumber.toLowerCase() === insertData.accountNumber.toLowerCase(); // return the ones with equal id
      });  
    });

    if (result.length !==0) {
      return res.status(400).json({
        status: "error",
        message: " Same Type payment info already exists",
      });
    } 
    if(result.length==0) {
      const bankInfoData = await BankInfoService.insertBankInfoDB(data);
      res.status(200).json({
        status: "success",
        data: bankInfoData,
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

module.exports={getBankInfoController,inserBankInfoController}