const menuItemDB=require('./menu.service')

const getMenuItems=async(req,res,next)=>{
    const data = req.body;
    const userrole = await menuItemDB.getMenuItemDB(data)
    res.json(userrole);
}

const insertMenuItems=async (req, res) => {
    try {
      const result = await menuItemDB.insertMenuDB( req.body);
      return res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
module.exports={getMenuItems,insertMenuItems}