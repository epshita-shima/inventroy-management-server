const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    mobileNo: { type: String, required: true },
   username: { type: String, required: true },
   password: { type: String, required: true },
  isactive: { type: Boolean, required: true },
  roleId: { type: String, required: true },
  menulist:([{
    childId: {type:String,required: true},
    insert: {type:Boolean,required: true},
    update: {type:Boolean,required: true},
    pdf:{type:Boolean,required: true},
    delete:{type:Boolean,required: true},
    parentIds:[{type:String,required:true}]
  }]),
    makeby:{type:String},
    updateby:{type:String}

  }, { timestamps: true });

  const User = mongoose.model('user',userSchema);
  module.exports=User