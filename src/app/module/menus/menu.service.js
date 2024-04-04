const MenuItem = require("./menu.model");

const getMenuItemDB = async () => {
  try {
    const menuitem = await MenuItem.MenuItem.find();
    return menuitem;
  } catch (error) {
    // Handle errors
    console.error("Error fetching menu:", error);
  }
};

const insertMenuDB = async (newItem) => {
  try {
    // Find the document with the label "User Setting"
    const userSetting = await MenuItem.MenuItem.findOne({
      "items.label": newItem.label,
    });
    if (!userSetting) {
      throw new Error("User setting not found");
    }

    // Find the parent item with the given label
    const userProfile = userSetting?.items?.find(
      (item) => item.label === newItem.label
    );

    if (!userProfile) {
      throw new Error("Parent item not found");
    }

    // Push the new item into the "items" array of the parent item
    const data = { items: [] };
    for (const item of userProfile.items) {
      const { _id, ...rest } = item; // Destructure _id and store the rest of the fields in rest
      data.items.push(rest); // Push the modified item (without _id) into data.items
    }

    for (const item of newItem.items) {
      const newItemDoc = new MenuItem.Item(item);
      await newItemDoc.save();
      data.items.push(newItemDoc);
    }

    userProfile.items = data.items;
    // Save the updated document
    console.log(userProfile);
    // const updatedMenu = await MenuItem.MenuItem.findByIdAndUpdate(
    //   userProfile._id, userProfile, {
    //   new: true,
    // });
    // console.log(updatedMenu)

    const updatedProfile = await userProfile.save({ suppressWarning: true });
    console.log("Updated user profile:", updatedProfile);
    return updatedProfile;
  } catch (error) {
    throw new Error("Error updating user setting: " + error.message);
  }
};

module.exports = { getMenuItemDB, insertMenuDB };
