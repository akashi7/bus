import cors from 'cors';
import { config } from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';

config();

const app: Application = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running on PORT', PORT);
});
