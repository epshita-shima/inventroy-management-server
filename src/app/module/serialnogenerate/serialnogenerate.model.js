const mongoose=require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
// autoIncrement.initialize(mongoose.connection);

const serialNoSchema = new mongoose.Schema({
    serialNo:{type: Number},
    type: { type: String, required: true },
    year: { type: String, required: true },
    makeby:{type:String},
    updateby:{type:String}
    // Reference to child menu items
  }, { timestamps: true });
  serialNoSchema.plugin(AutoIncrement, { inc_field: 'id' });
//   serialNoSchema.plugin(autoIncrement.plugin, { model: 'SerialNo', field: 'serialNo', startAt: 1 });
const SerialNoGenerate = mongoose.model('serialnogenerate',serialNoSchema);
module.exports=SerialNoGenerate 