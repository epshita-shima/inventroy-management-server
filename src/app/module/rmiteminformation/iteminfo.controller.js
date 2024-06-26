const RMIteminfoService = require("./iteminfo.service");

const getItemInfoController = async (req, res, next) => {
  const data = req.body;
  const itemInfoData = await RMIteminfoService.getItemInfoDB(data);
  res.json(itemInfoData);
};

const insertItemInfoController = async (req, res, next) => {
  try {
    const data = req.body;
    const itemInfo = await RMIteminfoService.insertItemInfotDB(data);
    console.log('itemInformcontroller',itemInfo)
    res.status(200).json({
      status: "success",
      data: itemInfo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getItemInfoByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const singleItemInfo = await RMIteminfoService.getItemInfoByIdDB(id);
    if (!singleItemInfo) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res.status(200).json(singleItemInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateItemInformationController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const updatedItemData = req.body; // Assuming the updated data is sent in the request body
    console.log("updatedItemData", updatedItemData);
    const result = await RMIteminfoService.updateItemInformationDB(
      id,
      updatedItemData
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateItemInformationStatusController = async (req, res) => {
  try {
      const result = await RMIteminfoService.updateItemInformationStatusDB(req.body);
      return res.status(200).json(result);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteItemInformationController = async (req, res) => {
  const { id } = req.params;
  try {
      const itemInfo = await RMIteminfoService.deleteItemInformationDB(id);
      return res.status(200).json(itemInfo);
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
  getItemInfoController,
  insertItemInfoController,
  getItemInfoByIdController,
  updateItemInformationController,
  deleteItemInformationController,
  updateItemInformationStatusController
};
