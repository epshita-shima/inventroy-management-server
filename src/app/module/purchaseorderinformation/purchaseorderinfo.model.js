const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetailsDataSchema = new Schema({
  itemId: { type: String, required: true },
  itemDescription: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
});

const PurchaseOrderInfoSchema = new Schema({
  poNo: { type: String, required: true },
  supplierId: { type: String, required: true },
  currencyId: { type: String, required: true },
  paymentId: { type: String, required: true },
  bankId: { type: String, required: true },
  deliveryDate: { type: String, required: true },
  grandTotalAmount: { type: Number, required: true },
  grandTotalQuantity: { type: Number, required: true },
  approveStatus: { type:Boolean, required: true },
  approveBy: { type: String, required: true },
  approveDate: { type: String, required: true },
  makeBy: { type: String, required: true },
  updateBy: { type: String },
  makeDate: { type: Date, required: true, default: Date.now },
  updateDate: { type: Date },
  detailsData: [DetailsDataSchema],
  remarks:{ type: String, required: true }
});
const PurchaseOrderInfoModel = mongoose.model(
  "purchaseorderinformation",
  PurchaseOrderInfoSchema
);
module.exports = PurchaseOrderInfoModel;
