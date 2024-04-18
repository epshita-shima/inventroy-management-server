const menuItemService=require('./menu.service')

const getMenuItems=async(req,res,next)=>{
    const data = req.body;
    const userrole = await menuItemService.getMenuItemDB(data)
    res.json(userrole);
}

const updateMenuItems=async (req, res) => {
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
module.exports={getMenuItems,createMenuItems,updateMenuItems}