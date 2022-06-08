import express from 'express';
import colors from 'colors';
import morgan from 'morgan';

import cors from 'cors';
import { readdirSync } from 'fs';
import dotenv from 'dotenv';
dotenv.config();
import configDB from './config/db.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//database
configDB();

console.log(process.env.PORT);
//routes
// readdirSync('./routes').map((r) => app.use('/', userRoutes));
app.use('/', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}..`.green);
});
