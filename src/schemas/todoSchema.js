const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    userrollname:{
        type:String,
        required:true
    }
},{ timestamps: true })

module.exports=todoSchema