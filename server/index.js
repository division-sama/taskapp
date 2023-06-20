import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/routes.js';
import loginRoutes from './routes/user.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();



const PORT = process.env.PORT || 8000;
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', Routes);
app.use('/', loginRoutes);


dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});