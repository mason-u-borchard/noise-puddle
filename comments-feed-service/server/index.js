// const db = require('./db');
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const $ = require('jquery');
const router = require('./router.js');
const cors = require('cors');


let app = express();

app.use(cors());

// Serve up static html
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/health', function(req, res){
  res.send({"message": "Instance is alive"});
});

// Router
app.use('/', router);

module.exports = app;