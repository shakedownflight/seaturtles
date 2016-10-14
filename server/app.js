var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser  = require('body-parser');
// var axios  = require('axios');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + "/../client"));

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/seaturtles');

var Content = require(__dirname+'/../client/mongo/models/content');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = require('./routes.js')(app, Content);

var port = 3030;
var server = app.listen(port, function(){
  console.log("Express server has started on port " + port)
});