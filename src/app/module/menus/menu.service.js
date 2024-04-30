const MenuItem = require("./menu.model");
const { ObjectId } = require("mongodb");
const getMenuItemDB = async () => {
  try {
    const menuitem = await MenuItem.MenuItem.find();
    return menuitem;
  } catch (error) {
    console.error("Error fetching menu:", error);
  }
};

const updateMenuDB = async (newItem) => {
  try {
    let parentMenu;
    parentMenu = await MenuItem.MenuItem.findOne({ _id: newItem._id });

    if (!parentMenu) {
      parentMenu = await MenuItem.MenuItem.findOne({
        "items._id": newItem._id,
      });
      console.log("parentmenu", parentMenu);
      if (parentMenu == null) {
        const parentNestedMenu = await MenuItem.MenuItem.findOne({
          "items.items._id": new ObjectId(newItem._id),
        });
        if (parentNestedMenu == null) {
          console.log("parentNestedMenu", parentNestedMenu);
        } else {
          const childMenu = parentNestedMenu.items.find(
            (item) => item._id.toString() === newItem.trackId
          );
          const childNestedMenu = childMenu.items.find(
            (item) => item._id.toString() === newItem._id
          );

          for (const item of newItem.items) {
            // Check if the item already exists in the child menu
            const existingItemIndex = childNestedMenu.items.findIndex(
              (existingItem) => existingItem._id.toString() === item._id
            );

            // If the item exists, isUpdated it; otherwise, create a new document for it
            if (existingItemIndex !== -1) {
              // Update existing item
              childNestedMenu.items[existingItemIndex].label = item.label; // Update other properties as needed
            } else {
              // Create a new document for the item
              const newItemDoc = new MenuItem.Item(item);
              await newItemDoc.save({ suppressWarning: true });
              childNestedMenu.items.push(newItemDoc);
              // parentNestedMenu.items.push(newItemDoc);
            }
          }

          await MenuItem.MenuItem.findByIdAndUpdate(
            parentNestedMenu._id,
            parentNestedMenu,
            {
              new: true,
            }
          );
          return parentNestedMenu;
        }
      } else {
        const childMenu = parentMenu.items.find(
          (item) => item._id.toString() === newItem._id
        );
        console.log("childMenu", childMenu);

        for (const item of newItem.items) {
          console.log("item", item);
          // Check if the item already exists in the child menu
          const existingItemIndex = childMenu.items.findIndex(
            (existingItem) => existingItem._id.toString() === item._id
          );

          // If the item exists, isUpdated it; otherwise, create a new document for it
          if (existingItemIndex !== -1) {
            // Update existing item
            childMenu.items[existingItemIndex].label = item.label; // Update other properties as needed
          } else {
            // Create a new document for the item
            const newItemDoc = new MenuItem.Item(item);
            await newItemDoc.save({ suppressWarning: true });
            childMenu.items.push(newItemDoc);
            // parentMenu.items.push(newItemDoc);
          }
        }
        await MenuItem.MenuItem.findByIdAndUpdate(parentMenu._id, parentMenu, {
          new: true,
        });
        console.log("2nd parent", parentMenu);
        return parentMenu;
      }
    } else {
      for (const item of newItem.items) {
        const existingItemIndex = parentMenu.items.findIndex(
          (existingItem) => existingItem._id.toString() === item._id
        );

        if (existingItemIndex !== -1) {
          parentMenu.items[existingItemIndex].label = item.label;
        } else {
          const newItemDoc = new MenuItem.Item(item);
          await newItemDoc.save({ suppressWarning: true });
          parentMenu.items.push(newItemDoc);
        }
      }

      await parentMenu.save({ suppressWarning: true });
      return parentMenu;
    }
  } catch (error) {
    throw new Error("Error inserting menu item: " + error.message);
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

const getMenuByIdDB = async (id) => {
  console.log(id);
  try {
    const parentMenu = await MenuItem.MenuItem.findById(id);
    console.log("parentMenu", parentMenu);
    if (parentMenu == null) {
      const parentNestedMenu = await MenuItem.MenuItem.findOne({
        "items._id": id,
      });
      console.log("parentNestedMenu", parentNestedMenu);
      if (parentNestedMenu == null) {
        const childNestedMenu = await MenuItem.MenuItem.findOne({
          "items.items._id": new ObjectId(id),
        });
        console.log("childNestedMenu", childNestedMenu);
        // throw new Error("User not found");
        return childNestedMenu;
      } else {
        return parentNestedMenu;
      }
    } else {
      return parentMenu;
    }
  } catch (error) {
    throw new Error("Internal server error from service");
  }
};

const updateSingleMenuDB = async (dataToUpdate) => {
  console.log(dataToUpdate);
  try {
    // Destructure the dataToUpdate object to extract individual fields
    const {
      _id,
      label,
      url,
      permissions,
      trackId,
      items,
      isParent,
      isChecked,
      isInserted,
      isRemoved,
      isUpdated,
      isPDF,
    } = dataToUpdate;

    // Construct the isUpdated object
    const updateData = {
      label,
      url,
      permissions,
      trackId,
      items,
      isParent,
      isChecked,
      isInserted,
      isRemoved,
      isUpdated,
      isPDF,
      updatedAt: Date.now(),
    };
    console.log(updateData);
    // Update the user
    const updatedUser = await MenuItem.MenuItem.findByIdAndUpdate(
      _id,
      updateData,
      {
        new: true,
      }
    );

    return updatedUser;
  } catch (error) {
    console.error("Error updating multiple users:", error);
    throw new Error("Failed to isUpdated multiple data");
  }
};
const updateSingleMenuDataDB = async (id, data) => {
  try {
    let parentMenu;
    parentMenu = await MenuItem.MenuItem.findOne({ _id: id });
    if (!parentMenu) {
      const parentNestedMenu = await MenuItem.MenuItem.findOne({
        "items._id": id,
      });
     
      if(!parentNestedMenu){
        const childNestedMenu = await MenuItem.MenuItem.findOne({
          "items.items_id": id,
        });
        
        if(!childNestedMenu){
          throw new Error("Error inserting menu item: " + error.message);
        }
        else{
          const updatedItem = await MenuItem.MenuItem.findByIdAndUpdate(id, data, { new: true });
          if (updatedItem) {
              console.log('Updated Item:', updatedItem);
              return updatedItem;
          } else {
              console.log('No matching document found for ID:', id);
              return null;
          }
        }
      }
      else{
        const updatedItem = await MenuItem.MenuItem.findByIdAndUpdate({"items._id":id}, data, { new: true });
        if (updatedItem) {
            console.log('Updated nested parent Item:', updatedItem);
            return updatedItem;
        } else {
            console.log('No matching document found for ID:', id);
            return null;
        }
      }
    } else {
      const updatedItem = await MenuItem.MenuItem.findByIdAndUpdate(id, data, { new: true });
      if (updatedItem) {
          console.log('Updated Item:', updatedItem);
          return updatedItem;
      } else {
          console.log('No matching document found for ID:', id);
          return null;
      }
    }
  } catch (error) {
    console.error("Error updating multiple users:", error);
    throw new Error("Failed to isUpdated multiple data");
  }
};
module.exports = {
  getMenuItemDB,
  insertMenuItems,
  updateMenuDB,
  getMenuByIdDB,
  updateSingleMenuDB,
  updateSingleMenuDataDB,
};
