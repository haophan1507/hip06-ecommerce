import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log('Server is running on the port', port);
});
