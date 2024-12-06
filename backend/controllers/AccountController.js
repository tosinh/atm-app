const Account = require('../models/Account');

// Đăng nhập
const login = async (req, res) => {
  const { accountID, password } = req.body;
  try {
    const account = await Account.findOne({ accountID, password });
    if (account) {
      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: {
          accountID: account.accountID,
          name: account.name,
          money: account.money,
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid ID or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Lấy thông tin tài khoản
const getAccountInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const account = await Account.findOne({ accountID: id });
    if (account) {
      res.status(200).json({
        success: true,
        data: {
          accountID: account.accountID,
          name: account.name,
          money: account.money,
        },
      });
    } else {
      res.status(404).json({ success: false, message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Nạp tiền
const deposit = async (req, res) => {
  const { accountID, amount } = req.body;
  try {
    const account = await Account.findOne({ accountID });
    if (account) {
      account.money += amount;
      await account.save();
      res.status(200).json({ success: true, message: 'Deposit successful', data: account });
    } else {
      res.status(404).json({ success: false, message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Rút tiền
const withdraw = async (req, res) => {
  const { accountID, amount } = req.body;
  try {
    const account = await Account.findOne({ accountID });
    if (account) {
      if (account.money >= amount) {
        account.money -= amount;
        await account.save();
        res.status(200).json({ success: true, message: 'Withdraw successful', data: account });
      } else {
        res.status(400).json({ success: false, message: 'Insufficient funds' });
      }
    } else {
      res.status(404).json({ success: false, message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  login,
  getAccountInfo,
  deposit,
  withdraw,
};
