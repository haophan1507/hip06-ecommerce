import express from 'express';
import * as dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import dbConnect from './config/dbConnect.js';
import initRoutes from './routes/index.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 8888;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();
initRoutes(app);

app.listen(port, () => {
  console.log('Server is running on the port', port);
});
