const express = require('Express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').confi();

const app = express();
app.use(cors());
app.use(express.json());

// connect to the MONGODB database

mongoose.connect();

const PORT = 5000;

app.listen(PORT);