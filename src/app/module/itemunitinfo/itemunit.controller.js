const itemunitService=require('./itemunit.service')


const getItemUnitController = async (req, res, next) => {
    const data = req.body;
    const itemunitData = await itemunitService.getItemUnitDB(data);
    res.json(itemunitData );
  };

const insertItemUnitController=async(req, res,next) => {
    try {
        const data = req.body;
        const itemsize= await itemunitService.insertItemUnitDB(data);
        res.status(200).json({
            status: 'success',
            data: itemsize
        });
    } catch (error) {
        if (error.message === "itemunit  with the same unit already exists") {
            return res.status(400).json({
                status: 'error',
                message: 'itemunit with the same unit already exists'
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Failed to save data to the database'
            });
        }
    }
};
module.exports={getItemUnitController,insertItemUnitController}