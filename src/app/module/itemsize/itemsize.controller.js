const itemsizeService=require('./itemsize.service')


const getItemSizeController = async (req, res, next) => {
    const data = req.body;
    const itemsizeData = await itemsizeService.getItemSizesDB(data);
    res.json(itemsizeData );
  };

const createItemsizeController=async(req, res,next) => {
    try {
        const data = req.body;
        const itemsize= await itemsizeService.insertItemSizesDB(data);
        res.status(200).json({
            status: 'success',
            data: itemsize
        });
    } catch (error) {
        if (error.message === "itemsize  with the same size already exists") {
            return res.status(400).json({
                status: 'error',
                message: 'itemsize with the same size already exists'
            });
        } else {
            res.status(500).json({
                status: 'error',
                message: 'Failed to save data to the database'
            });
        }
    }
};

module.exports = {getItemSizeController,createItemsizeController}