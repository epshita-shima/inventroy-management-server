const mongoose = require("mongoose");

const categoryInfoSchema = new mongoose.Schema({
  categoryInfo: { type: String, required: true },
  makeBy: { type: String,required: true },
  updateBy: { type: String },
  makeDate:{ type: String,required: true },
  updateDate:{ type: String }
});

const CategoryModel = mongoose.model("categoryinformation", categoryInfoSchema);
module.exports = CategoryModel;
