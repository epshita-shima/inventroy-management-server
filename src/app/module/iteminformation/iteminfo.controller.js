const iteminfoService=require('./iteminfo.service')

const getItemInfoController = async (req, res, next) => {
    const data = req.body;
    const itemInfoData = await iteminfoService.getItemInfoDB(data);
    res.json(itemInfoData );
  };


const insertItemInfoController=async(req, res,next) => {
    try {
        const data = req.body;
        const itemInfo= await iteminfoService.insertItemInfotDB(data);
        res.status(200).json({
            status: 'success',
            data: itemInfo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getItemInfoByIdController = async (req, res) => {
    const { id } = req.params;
    try {
      const singleItemInfo = await iteminfoService.getItemInfoByIdDB(id);
      if (!singleItemInfo) {
        return res.status(404).json({ message: "Menu not found" });
      }
      return res.status(200).json(singleItemInfo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
module.exports={getItemInfoController,insertItemInfoController,getItemInfoByIdController}