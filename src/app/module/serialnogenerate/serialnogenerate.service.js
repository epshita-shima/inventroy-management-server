const SerialNoGenerate = require("./serialnogenerate.model");

async function getNextSerialNumber() {
    // const lastDocument = await SerialNoGenerate.findOne().sort({ serialNo: -1 }); // Get the document with the highest serialNo
    // if (lastDocument) {
    //     return  lastDocument.serialNo + 1 ; // Increment the last serialNo
    // } else {
    //     return 1; // If no document exists, start from 1
    // }
    const result = await SerialNoGenerate.findOneAndUpdate(
        { type },
        { $inc: { serialNo: 1 } },
        { new: true, upsert: true }
      );
      return result.serialNo;
}

const getSerialNoDB=async()=>{
    try {
        const serialNo = await SerialNoGenerate.find().select({
            __v:0
        });
        return serialNo;
    } catch (error) {
        // Handle errors
        console.error("Error fetching users:", error);
    }
}

module.exports = { getNextSerialNumber,getSerialNoDB };