const express = require('express');
const colors = require('colors');
const morgan = require('morgan');

const cors = require('cors');
const { readdirSync } = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const configDB = require('./config/db');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//database
configDB();

//routes
readdirSync('./routes').map((r) => app.use('/', require('./routes/' + r)));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`);
});
