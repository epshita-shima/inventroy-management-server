const UserRole = require("./userroll.model");

async function createUserRole(data) {
    return await UserRole.create({ userrollname: 'example121' });
}

async function getAllUserRoles() {
    return await UserRole.find();
}

module.exports = {
    createUserRole,
    getAllUserRoles
};


// const UserRoles =require("./userroll.model.js")

// const createUserRollToDB=async(payload)=>{
//     console.log(payload)
//     const newUserRole = new UserRoles({ userrollname: 'example121' });
//     await newUserRole.save();
//       return newUserRole
// }
// module.exports=createUserRollToDB





    // const userroll =await new UserRoles(payload);
    //   await userroll.save();
//       try{
//         // const {userrollname}=req.body;
//         // console.log(userrollname)
//         // const existingUserRoll= await UserRoles.findOne({userrollname})
//         // if(existingUserRoll){
//         //   return res.status(400).json({ message: "User roll already exists" });
//         // }
//         // else{
//         //   await UserRoles.create({ userrollname }); 
//         //   res.status(201).json({ message: "User roll created successfully" });
//         // }
//         const newUserRole = new UserRoles({ userrollname: 'example' });
// await newUserRole.save();
//       }
//       catch(error){
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//       }
