const CFTInfosService = require("./cft.service");

const getCFTInfoController = async (req, res, next) => {
  const data = req.body;
  const CFTInfoData = await CFTInfosService.getCFTInfosDB(data);
  res.json(CFTInfoData);
};

const insertCFTInfoController = async (req, res, next) => {
  try {
    const data = req.body;
    const CFTInfo = await CFTInfosService.insertCFTInfosDB(data);
    res.status(200).json({
      status: "success",
      data: CFTInfo,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to save data to the database",
    });
  }
};

const getCFTInfoByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const singleICFTInfo = await CFTInfosService.getCFTInfosByIdDB(id);
    if (!singleICFTInfo) {
      return res.status(404).json({ message: "Menu not found" });
    }
    return res.status(200).json(singleICFTInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateCFTInfoController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const updateCFTInfoData = req.body; // Assuming the updated data is sent in the request body
    console.log("updateCFTInfoData", updateCFTInfoData);
    const result = await CFTInfosService.updateCFTInfosDB(
      id,
      updateCFTInfoData
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCFTInfoStatusController = async (req, res) => {
  try {
    const result = await CFTInfosService.updateCFTInfosStatusDB(req.body);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteCFTInfoController = async (req, res) => {
    const { id } = req.params;
    try {
        const cftInfo = await CFTInfosService.deleteCFTInfosDB(id);
        return res.status(200).json(cftInfo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
module.exports = {
  getCFTInfoController,
  insertCFTInfoController,
  updateCFTInfoController,
  getCFTInfoByIdController,
  updateCFTInfoStatusController,
  deleteCFTInfoController
};
