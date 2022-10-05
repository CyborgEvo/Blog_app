require('dotenv').config();
const express = require('express');
const colors = require('colors');
const { errorHandler } = require('./Middleware/errorhandler');
const postroute = require('./Routes/postsroutes');
const connectDB = require('./Config/db');

const port = process.env.PORT || 3001;


connectDB();

const app = express();

const start = () => {
    console.log(`Server running on  ${ port }`);
};


app.use(express.json());
app.use(express.urlencoded({ extended : false}))

app.use('/api', postroute);
app.use(errorHandler)


app.listen( port, start );