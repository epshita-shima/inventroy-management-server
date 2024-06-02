const mongoose =require('mongoose')

const iteminfoSchema=new mongoose.Schema({
    itemName: {type: String,required:true},
    sizeId: {type: String,required:true},
    unitId: {type: String,required:true},
    openingStock: {type: String,required:true},
    openingDate: {type: String,required:true},
    itemStatus: {type: String,required:true},
    ladgerApproveStatus: {type: String},
    ladgerApproveDate: {type: String},
    makeBy: {type: String,required:true},
    updateBy: {type: String},
    makeDate: {type: String,required:true},
    updateDate: {type: String},
})

const ItemInfoModel=mongoose.model('iteminformation',iteminfoSchema)
module.exports=ItemInfoModel