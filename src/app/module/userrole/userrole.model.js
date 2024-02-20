const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema({
    userrolename: String,
    makeby:String,
    updateby:String
}, { timestamps: true });

const UserRole = mongoose.model('UserRole', userRoleSchema);

module.exports = UserRole;



// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const userRoleSchema = new mongoose.Schema({
//     userrollname: String
//   }, { timestamps: true });

  
//   module.exports=mongoose.model('UserRoles', userRoleSchema)

