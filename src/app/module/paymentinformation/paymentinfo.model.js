const mongoose = require("mongoose");

const paymentTypeSchema = new mongoose.Schema({
  paymentMode: { type: String, required: true },
  paymentType: { type: String, required: true },
  makeBy: { type: String,required: true },
  updateBy: { type: String },
  makeDate:{ type: String,required: true },
  updateDate:{ type: String }
});

const PaymentInfoModel = mongoose.model("paymentinformation", paymentTypeSchema);
module.exports = PaymentInfoModel;