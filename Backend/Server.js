require('dotenv').config();
const express = require('express');
const { errorHandler } = require('./Middleware/errorhandler');

const port = process.env.PORT || 3001;

const app = express();

const start = () => {
    console.log(`Server running on  ${ port }`);
};

const postroute = require('./Routes/postsroutes');
app.use(express.json());
app.use(express.urlencoded({ extended : false}))

app.use('/api', postroute);
app.use(errorHandler)


app.listen( port, start );