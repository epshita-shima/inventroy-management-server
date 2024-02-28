
const UserRole =require("./userrole.model.js")

const createUserRoleToDB=async(payload)=>{
    try {
        const existingUserRole = await UserRole.findOne({ userrolename: payload.userrolename });
        if (existingUserRole) {
            throw new Error("User roll with the same name already exists");
        }
        const userRole = await UserRole.create(payload);
        return userRole;
    } catch (error) {
        console.error("Error saving data to MongoDB:", error);
        throw error// Throw the error to be handled by the caller
    }   
}

const getUserRoleDB=async()=>{
    try {
        const userrole = await UserRole.find().select({
            __v:0
        });
        return userrole;
    } catch (error) {
        // Handle errors
        console.error("Error fetching users:", error);
    }
}

module.exports={createUserRoleToDB,getUserRoleDB}
