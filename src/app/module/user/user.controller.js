const User = require('./user.model');
const userService=require('./user.service')
const createUser=async(req, res,next) => {
    try {
        const data = req.body;
        const user= await userService.createUserToDB(data);
        res.status(200).json({
            status: 'success',
            data: user
        });
    } catch (error) {
        if (error.message === "User  with the same name already exists") {
            return res.status(400).json({
                status: 'error',
                message: 'User with the same name already exists'
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Failed to save data to the database'
            });
        }
    }

};
const getUser=async(req,res,next)=>{
    const data = req.body;
    const user = await userService.getUserDB(data)
    res.json(user);
}
const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userService.getUserByIdDB(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { makeby, updateby } = req.body;

    try {
        const user = await userService.updateUserDB(id, makeby, updateby);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports={createUser,getUser,getUserById,updateUser}