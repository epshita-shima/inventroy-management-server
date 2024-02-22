const menuItemDB=require('./menu.service')
const getMenuItems=async(req,res,next)=>{
    const data = req.body;
    const userrole = await menuItemDB.getMenuItemDB(data)
    res.json(userrole);
}
module.exports={getMenuItems}