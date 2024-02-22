const mongoose=require('mongoose')
const menuItemSchema = new mongoose.Schema({
    label: { type: String, required: true },
    url: { type: String, required: true },
    permissions: [{ type: String, required: true }],
    children: [{ type: mongoose.Schema.Types.ObjectId }] // Reference to child menu items
  });
const MenuItem = mongoose.model('menu', menuItemSchema);
module.exports=MenuItem