const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const accountRoutes = require('./routes/accountRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Kết nối MongoDB
mongoose.connect(
  // mongodb://localhost:27017/atm,
  // mongodb://database:27017/atm,
  `mongodb://host.docker.internal:27017/atm`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Kiểm tra kết nối
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/', accountRoutes);

// Khởi động server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
