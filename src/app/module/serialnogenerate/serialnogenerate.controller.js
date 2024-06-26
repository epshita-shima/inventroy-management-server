const SerialNoGenerate = require("./serialnogenerate.model");
const { getNextSerialNumber, getSerialNoDB } = require("./serialnogenerate.service");

async function insertDocument(documentData) {
    // const serialNo = await getNextSerialNumber();
    // documentData.serialNo = serialNo; // Set the serialNo in the document data
    // const document = new SerialNoGenerate(documentData);
    // return document.save();
    const serialNo = await getNextSerialNumber(data.type);
    const document = new SerialNoGenerate({
      ...data,
      serialNo
    });
    return document.save();

}

const getSerialNumber=async(req,res,next)=>{
    const data = req.body;
    const serialNo = await getSerialNoDB(data)
    res.json(serialNo);
}
module.exports = { insertDocument,getSerialNumber };