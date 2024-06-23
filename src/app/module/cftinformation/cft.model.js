const mongoose = require("mongoose");

const cftinfoSchema = new mongoose.Schema({
    openingDate: { type: String, required: true },
        kgPerUnit:{ type: String, required: true },
        image: {type:String },
        isActive: { type: Boolean, required: true },
        closingDate:{ type: String },
        makeBy: { type: String,required: true },
        makeDate: { type: String,required: true },
        updateBy: { type: String },
        updateDate: { type: String },
    // openingDate: { type: Date, required: true },
    // isActive: { type: Boolean, required: true },
    // makeBy: { type: String, required: true },
    // makeDate: { type: Date, required: true },
    // updateBy: { type: String },
    // updateDate: { type: Date },
    // closingDate: { type: Date },
    // kgPerUnit: { type: String, required: true },
    // image: { type: String }
});

const CFTInfoModel = mongoose.model("cftinformation", cftinfoSchema);
module.exports = CFTInfoModel;
