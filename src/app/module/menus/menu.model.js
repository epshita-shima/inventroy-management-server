const mongoose=require('mongoose')
const itemSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
  permissions: [{ type: String, required: true }],
  children: [{ type: mongoose.Schema.Types.ObjectId }],
  trackId:{ type: String},
  items: [this],
});
const menuItemSchema = new mongoose.Schema({
    label: { type: String, required: true },
    url: { type: String, required: true },
    permissions: [{ type: String, required: true }],
    children: [{ type: mongoose.Schema.Types.ObjectId }],
    items: [itemSchema],

    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
});

const Item = mongoose.model('Item', itemSchema);
const MenuItem = mongoose.model('menu', menuItemSchema);
module.exports={MenuItem,Item}