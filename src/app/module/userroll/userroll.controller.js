const userService = require("./userroll.service");

async function createUserRole(req, res) {
    try {
        const userRole = await userService.createUserRole(req.body);
        res.status(201).json({
            status: 'success',
            data: userRole
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

async function getAllUserRoles(req, res) {
    try {
        const userRoles = await userService.getAllUserRoles();
        res.status(200).json({
            status: 'success',
            data: userRoles
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

module.exports = {
    createUserRole,
    getAllUserRoles
};




// const createUserRollToDB=require("./userroll.service.js")

//  const createUserRoll=async(req, res,next) => {
//     const data=req.body
//     console.log(data)
//     const userroll=await createUserRollToDB(data);
//     res.status(200).json({
//         status:'success',
//         data:userroll
//     })
//     next();
// };

// module.exports = createUserRoll