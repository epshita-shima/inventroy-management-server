const mongoose =require('mongoose')

const itemunitSchema=new mongoose.Schema({
        unitInfo:{type: String,required:true},
        makeBy: { type: String,required: true },
        updateBy: { type: String  },
        makeDate:{ type: String,required: true },
        updateDate:{ type: String  }
})

const UnitModel=mongoose.model('itemunitinfo',itemunitSchema)
module.exports=UnitModel