const CategoryInfoService=require('./categoryinfo.service')


const getCategoryInfoController = async (req, res, next) => {
    const data = req.body;
    const categoryInfoData = await CategoryInfoService.getCategoryInfoDB(data);
    res.json(categoryInfoData );
  };

const createCategoryInfoController=async(req, res,next) => {
    try {
        const data = req.body;
        const categoryInfo= await CategoryInfoService.insertCategoryInfoDB(data);
        res.status(200).json({
            status: 'success',
            data: categoryInfo
        });
    } catch (error) {
        if (error.message === "CategoryInfo  with the same category already exists") {
            return res.status(400).json({
                status: 'error',
                message: 'CategoryInfo with the same category already exists'
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Failed to save data to the database'
            });
        }
    }
};

module.exports = {getCategoryInfoController,createCategoryInfoController}