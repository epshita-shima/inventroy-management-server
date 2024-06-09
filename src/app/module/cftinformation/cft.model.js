const mongoose = require("mongoose");

const cftinfoSchema = new mongoose.Schema({
    openingDate: { type: String, required: true },
        kgPerUnit:{ type: String, required: true },
        isActive: { type: Boolean, required: true },
        closingDate:{ type: Boolean },
        makeBy: { type: String,required: true },
        makeDate: { type: String,required: true },
        updateBy: { type: String },
        updateDate: { type: String },
});

const CFTInfoModel = mongoose.model("cftinformation", cftinfoSchema);
module.exports = CFTInfoModel;
