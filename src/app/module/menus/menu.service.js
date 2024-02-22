const MenuItem = require("./menu.model");

const getMenuItemDB = async () => {
  try {
    const menuitem = await MenuItem.find();
    return menuitem;
  } catch (error) {
    // Handle errors
    console.error("Error fetching menu:", error);
  }
};

module.exports={getMenuItemDB}
