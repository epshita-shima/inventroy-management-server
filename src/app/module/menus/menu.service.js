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
    const parentMenu = await MenuItem.MenuItem.findOne({ _id: newItem._id });
 
    if (!parentMenu) {
      const parentMenu = await MenuItem.MenuItem.findOne({
        "items._id": newItem._id,
      });
     
      const childMenu = parentMenu.items.find(
        (item) => item._id.toString() === newItem._id
      );
      for (const item of newItem.items) {
        const newItemDoc = new MenuItem.Item(item);
 
        // await newItemDoc.save({ suppressWarning: true });
        childMenu.items = [];
        childMenu.items.push(newItemDoc);
        for(const item of childMenu.items){
         parentMenu.items.push(item);
        }
      }
     
      const updatedParentMenu = await parentMenu.save({ suppressWarning: true });
     
      return updatedParentMenu;
    }

    // parentMenu.items.push(newItem.items);
    else {
      for (const item of newItem.items) {
        const newItemDoc = new MenuItem.Item(item);
        await newItemDoc.save({ suppressWarning: true });
        parentMenu.items.push(newItemDoc);
      }
      console.log(parentMenu);
      const updatedParentMenu = await parentMenu.save({
        suppressWarning: true,
      });

      return updatedParentMenu;
    }
  } catch (error) {
    throw new Error("Error inserting menu item: " + error.message);
  }
  function addItemToNestedItem(items, parentItemId, nestedItem) {
    for (const item of items) {
      if (item._id === parentItemId) {
        // Found the parent item, add the nested item to its items array
        item.items.push(nestedItem);
        return items; // Return the updated array
      }
      // If the current item has nested items, recursively search within them
      if (item.items && item.items.length > 0) {
        const updatedNestedItems = addItemToNestedItem(item.items, parentItemId, nestedItem);
        if (updatedNestedItems !== item.items) {
          // If the nested items were updated, return the updated array
          return items;
        }
      }
    }
    // If the parent item is not found, return the original array
    return items;
  }
};

async function insertMenuItems(menuItems) {
  console.log(menuItems);
  try {
    return await MenuItem.MenuItem.insertMany(menuItems);
  } catch (error) {
    throw new Error("Error inserting menu items: " + error.message);
  }
}

module.exports = { getMenuItemDB, insertMenuItems, updateMenuDB };
