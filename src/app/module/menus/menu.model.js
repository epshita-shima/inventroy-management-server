const mongoose=require('mongoose')
const itemSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  label: { type: String, required: true },
  url: { type: String, required: true },
  permissions: [{ type: String, required: true }],
  trackId:{ type: String},
  items: [this],
  isParent:{ type: Boolean, required: true }
});

const menuItemSchema = new mongoose.Schema({
    label: { type: String, required: true },
    url: { type: String, required: true },
    permissions: [{ type: String, required: true }],
    children: [{ type: mongoose.Schema.Types.ObjectId }],
    items: [itemSchema],
    isParent: { type: Boolean, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    trackId:{ type: String},
});
const Item = mongoose.model('Item',itemSchema);
const MenuItem = mongoose.model('menu', menuItemSchema);
module.exports={MenuItem,Item}