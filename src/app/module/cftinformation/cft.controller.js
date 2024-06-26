const CFTInfosService = require("./cft.service");
const CFTInfoModel=require('./cft.model')
var fs = require("fs");

const getCFTInfoController = async (req, res, next) => {
  const data = req.body;
  console.log(data)
  const CFTInfoData = await CFTInfosService.getCFTInfosDB(data);
  res.json(CFTInfoData);
};

const insertCFTInfoController = async (req, res, next) => {
  try {
     const newImage = new CFTInfoModel();
     newImage.openingDate = req.body.openingDate;
     newImage.kgPerUnit = req.body.kgPerUnit;
     newImage.isActive = req.body.isActive
     newImage.closingDate = req.body.closingDate 
     newImage.makeBy = req.body.makeBy;
     newImage.makeDate = req.body.makeDate;
     newImage.updateBy = req.body.updateBy;
     newImage.updateDate = req.body.updateDate;

     if (req.file) {
         newImage.image = req.file.path;
     }
     else{
      newImage.image=''
     }
 
    const CFTInfo = await CFTInfosService.insertCFTInfosDB(newImage);
    res.status(200).json({
      status: "success",
      data: CFTInfo,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message:{error},
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
    const updateCFTInfoData = {
      openingDate: req.body.openingDate,
      kgPerUnit: req.body.kgPerUnit,
      isActive: req.body.isActive ,
      closingDate: req.body.closingDate,
      makeBy: req.body.makeBy,
      makeDate: req.body.makeDate,
      updateBy: req.body.updateBy,
      updateDate: req.body.updateDate,
  };

  if (req.file) {
      updateCFTInfoData.image = req.file.path; // Update image if a new file is uploaded
  }

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
