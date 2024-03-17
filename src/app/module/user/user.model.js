const mongoose = require("mongoose");

const dropdownSchema = new mongoose.Schema({
  label: { type: String, required: true },
  url: { type: String, required: true },
  permissions: [{ type: String }],
  isChecked: { type: Boolean, default: false },
  dropdown: [this],
  trackId: { type: String, required: true },
  insert: { type: Boolean, default: false },
  update: { type: Boolean, default: false },
  delete: { type: Boolean, default: false },
  pdf: { type: Boolean, default: false },
});
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  mobileNo: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  isactive: { type: Boolean, required: true },
  roleId: { type: String, required: true },
  menulist: [
    {
      trackId: { type: String },
      label: { type: String, required: true },
      url: { type: String, required: true },
      permissions: [{ type: String }], // Change the type based on your requirements
      parentIds: [{ type: String }], // Change the type based on your requirements
      dropdown: [dropdownSchema],
      isChecked: { type: Boolean, default: false },
      insert: { type: Boolean, default: false },
      update: { type: Boolean, default: false },
      delete: { type: Boolean, default: false },
      pdf: { type: Boolean, default: false },
    },
  ],
  makeby: { type: String },
  updateby: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
