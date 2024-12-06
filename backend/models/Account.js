const mongoose = require('mongoose');

// Schema tài khoản
const AccountSchema = new mongoose.Schema({
  accountID: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  money: { type: Number, required: true },
  name: { type: String, required: true },
});

// Tạo model
const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
