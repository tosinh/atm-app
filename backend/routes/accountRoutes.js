const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

// Định nghĩa các route
router.post('/login', AccountController.login);
router.get('/account/:id', AccountController.getAccountInfo);
router.post('/deposit', AccountController.deposit);
router.post('/withdraw', AccountController.withdraw);

module.exports = router;
