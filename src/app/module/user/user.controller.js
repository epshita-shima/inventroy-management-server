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
    const {  isactive } = req.body;

    try {
        const user = await userService.updateUserDB(id, isactive);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
const updateUserPassword = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;

    try {
        const user = await userService.updateUserPasswordDB(id, password);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const updateUserMultipleStatus = async (req, res) => {
    try {
        // Call the service function to update multiple data
        const result = await userService.updateUserMultipleStatusDB(req.body);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const updateUserMultipleField = async (req, res) => {
    try {
        // Call the service function to update multiple data
        const result = await userService.updateUserMultipleDataDB(req.body);
        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userService.deleteUserDB(id);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports={createUser,getUser,getUserById,updateUser,updateUserMultipleStatus,updateUserMultipleField,deleteUser,updateUserPassword}