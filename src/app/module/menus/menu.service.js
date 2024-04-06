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

const updateMenuDB = async (newItem) => {
  console.log(newItem)
  // try {
  //   // Find the document with the label "User Setting"
  //   const userSetting = await MenuItem.MenuItem.findOne({
  //     items: {
  //       $elemMatch: {
  //         _id: newItem._id
  //       }
  //     }
  //   });
  //   console.log(userSetting)
  //   if (!userSetting) {
  //     throw new Error("User setting not found");
  //   }

  //   // Find the parent item with the given label
  //   const userProfile = userSetting?.items?.find(
  //     (item) => item.label === newItem.label
  //   );

  //   if (!userProfile) {
  //     throw new Error("Parent item not found");
  //   }

  //   // Push the new item into the "items" array of the parent item
  //   const data = { items: [] };
  //   for (const item of userProfile.items) {
  //     const { _id, ...rest } = item; // Destructure _id and store the rest of the fields in rest
  //     data.items.push(rest); // Push the modified item (without _id) into data.items
  //   }

  //   for (const item of newItem.items) {
  //     const newItemDoc = new MenuItem.Item(item);
  //     await newItemDoc.save();
  //     data.items.push(newItemDoc);
  //   }

  //   userProfile.items = data.items;
  //   // Save the updated document
  //   console.log(userProfile);
  //   // const updatedMenu = await MenuItem.MenuItem.findByIdAndUpdate(
  //   //   userProfile._id, userProfile, {
  //   //   new: true,
  //   // });
  //   // console.log(updatedMenu)
  //   const updatedMenu = await User.findByIdAndUpdate(userProfile._id,userProfile, {
  //     new: true,
  //   });
  //   // const updatedProfile = await userProfile.save({ suppressWarning: true });
  //   console.log("Updated user profile:", updatedProfile);
  //   return updatedMenu;
  // } catch (error) {
  //   throw new Error("Error updating user setting: " + error.message);
  // }
  try {
    // Find the parent menu containing the child's child menu
    const parentMenu = await MenuItem.MenuItem.findOne({ "items.items._id": newItem._id });
    console.log(parentMenu);
    if (!parentMenu) {
        throw new Error("Parent menu not found");
    }

    // Find the parent menu item containing the child's child menu
    const parentMenuItem = parentMenu.items.find(item => item.items.some(childItem => childItem._id.toString() === newItem._id));
    if (!parentMenuItem) {
        throw new Error("Parent menu item not found");
    }

    // Add the new item to the parent menu item's child items
    parentMenuItem.items.push(newItem);

    // Save the updated parent menu
    const updatedParentMenu = await parentMenu.save();

    return updatedParentMenu;
} catch (error) {
    throw new Error("Error inserting menu item: " + error.message);
}
};

async function insertMenuItems(menuItems) {
  console.log(menuItems)
  try {
      return await MenuItem.MenuItem.insertMany(menuItems);
  } catch (error) {
      throw new Error('Error inserting menu items: ' + error.message);
  }
}

module.exports = { getMenuItemDB,insertMenuItems ,updateMenuDB};
