const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminName: String,
  adminId: String,
  password: String,
  phone: String,
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
