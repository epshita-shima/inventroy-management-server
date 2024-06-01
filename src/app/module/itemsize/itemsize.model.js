const mongoose = require("mongoose");

const itemsizeSchema = new mongoose.Schema({
  sizeInfo: { type: String, required: true },
  makeBy: { type: String,required: true },
  updateBy: { type: String },
  makeDate:{ type: String,required: true },
  updateDate:{ type: String }
});

const SizeModel = mongoose.model("itemsize", itemsizeSchema);
module.exports = SizeModel;
