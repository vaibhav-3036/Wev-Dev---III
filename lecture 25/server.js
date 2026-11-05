const express = require('express');
const app = express();
const router = require('./routes/doctor_routes.js');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const port = 3000;

app.use(express.json());
app.use('/', router);

dotenv.config();
connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
