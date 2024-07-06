const mongoose = require("mongoose");

const bankInformationSchema = new mongoose.Schema({
  accountNumber: { type: String, required: true },
  accountName: { type: String, required: true },
  bankName: { type: String, required: true },
  branchName: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  routingNumber: { type: String, required: true },
  swiftCode: { type: String, required: true },
  makeBy: { type: String, required: true },
  updateBy: { type: String },
  makeDate: { type: String, required: true },
  updateDate: { type: String },
});

const BankInfoModel = mongoose.model(
  "bankinformation",
  bankInformationSchema
);
module.exports = BankInfoModel;
