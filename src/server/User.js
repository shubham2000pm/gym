const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  phone: String,
  address: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
