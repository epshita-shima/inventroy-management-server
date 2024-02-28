const User = require("./user.model");

const createUserToDB = async (payload) => {
  console.log(payload);
  try {
    const existingUserRole = await User.findOne({ username: payload.username });
    if (existingUserRole) {
      throw new Error("User roll with the same name already exists");
    }
    const user = await User.create(payload);
    return user;
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    throw error; // Throw the error to be handled by the caller
  }
};

const getUserDB = async () => {
  try {
    const user = await User.find().select({
      __v: 0,
    });
    return user;
  } catch (error) {
    // Handle errors
    console.error("Error fetching users:", error);
  }
};
const getUserByIdDB = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw new Error('Internal server error');
    }
};
const updateUserDB = async (id, makeby, updateby) => {
  try {
    const user = await User.findByIdAndUpdate(
      id,
      { makeby, updateby },
      { new: true }
    );
    console.log(user);
    if (!user) {
      throw new Error("User not found");
    }

    return user;
  } catch (error) {
    throw new Error("Internal server error");
  }
};

module.exports = { createUserToDB, getUserDB, getUserByIdDB,updateUserDB };
