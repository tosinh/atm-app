const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// URL của backend
const BACKEND_URL = 'http://backend:5000';

axios.post(`${BACKEND_URL}/api/login`, { accountID: '2115262', password: '2115262' })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error connecting to backend:', error.message));

// Trang Đăng nhập
app.get('/', (req, res) => {
  res.render('login', { errorMessage: null });
});

app.post('/login', async (req, res) => {
  const { accountID, password } = req.body;
  try {
    const response = await axios.post(`${BACKEND_URL}/login`, { accountID, password });
    if (response.data.success) {
      res.redirect(`/home?accountID=${accountID}`);
    } else {
      res.render('login', { errorMessage: response.data.message });
    }
  } catch (error) {
    res.render('login', { errorMessage: 'Unable to connect to the server.' });
  }
});

// Trang Chủ
app.get('/home', (req, res) => {
  const { accountID } = req.query;
  res.render('home', { accountID });
});

// Trang Thông tin Tài khoản
app.get('/info', async (req, res) => {
  const { accountID } = req.query;
  try {
    const response = await axios.get(`${BACKEND_URL}/account/${accountID}`);
    if (response.data.success) {
      res.render('info', { account: response.data.data });
    } else {
      res.redirect('/');
    }
  } catch (error) {
    res.redirect('/');
  }
});

// Khởi động server frontend
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Frontend is running on http://localhost:${PORT}`);
});
