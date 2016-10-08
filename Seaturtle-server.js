var express = require('express');
//import db from './db';
var bodyParser = require( 'body-parser');
//var router = require('./router.js');

var app = express();

// app.set('views', __dirname + 'views');
// app.set('');
// app.set('port',3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client/public'));

//app.get('/client', router);

console.log('Seaturtle-server is listening on 4568');
app.listen(4568);