const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:/auth')



const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);


const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('server start',port);
