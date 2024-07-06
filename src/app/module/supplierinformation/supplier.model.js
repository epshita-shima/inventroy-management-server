const mongoose = require("mongoose");

const supplierInfoSchema = new mongoose.Schema({
  supplierName: { type: String, required: true },
  supplierShortName: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: String, required: true },
  contactPerson: { type: String, required: true },
  binNo: { type: String, required: true },
  tradeLicenceNo: { type: String, required: true },
  tinNo: { type: String, required: true },
  address: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  supplierApproveStatus: { type: Boolean, required: true },
  supplierApproveDate: { type: String },
  isAccountPostingStatus: { type: Boolean, required: true },
  vocuherNo: { type: String },
  voucherDate: { type: String },
  makeBy: { type: String, required: true },
  updateBy: { type: String },
  makeDate: { type: String, required: true },
  updateDate: { type: String },
});

const SupplierModel = mongoose.model("supplierinformation", supplierInfoSchema);
module.exports = SupplierModel;
