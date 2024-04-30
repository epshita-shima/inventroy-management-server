const menuItemService = require("./menu.service");

const getMenuItems = async (req, res, next) => {
  const data = req.body;
  const userrole = await menuItemService.getMenuItemDB(data);
  res.json(userrole);
};

const updateMenuItems = async (req, res) => {
  try {
    const result = await menuItemService.updateMenuDB(req.body);
    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

async function createMenuItems(req, res) {
  try {
    const menuItems = req.body;
    const insertedItems = await menuItemService.insertMenuItems(menuItems);
    res.status(201).json(insertedItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getMenuById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await menuItemService.getMenuByIdDB(id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updatedSingleMenuItems = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await menuItemService.updateSingleMenuDB(req.body);
    console.log("menu controller", result);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateSinglePortionMenuUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItemData = req.body; // Assuming the updated data is sent in the request body
    const result = await menuItemService.updateSingleMenuDataDB(id,updatedItemData);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMenuItems,
  createMenuItems,
  updateMenuItems,
  getMenuById,
  updatedSingleMenuItems,
  updateSinglePortionMenuUpdate,
};
