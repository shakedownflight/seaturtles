var express = require('express');
var mongoose = require('mongoose');

// mongoDB connection
var db = mongoose.connection;
db.on('error', console.error); // if it fails to connect, console error
db.once('open', function() {
	console.log('Connected to mongod sever'); // if success to connect, console log
})

mongoose.connect('mongodb://localhost/choco'); // It means that connect to local mongoDB, database name is 'choco'

// Router
// var router = require('./routes.js'); // router is not yet made

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 7777);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// URL test page
app.get("/hello", (req, res)=> {
	return res.send("Hello World!");
})

// MongoDB test page
app.get("/mongo", (req, res)=> {
	choco.find({}, function(err, data) {

		var result = [];
		for (var i in data) {
			console.log(data[i]);
			result.push(data[i]['name']);
		}

		res.send(result)
	})
})

var chocoDB = new mongoose.Schema({
	name: String
}, {collection: 'choco'}); // chocoDB 라는 database를 만들고 collection 이름을 'choco'로 한다.

var chocoModel = mongoose.model('choco', chocoDB); // chocoDB의 choco collection에 CRUD 할 수 있는 variable 생성.
var choco = mongoose.model('choco'); // 이유는 모르겠지만 이걸 추가해주면 mongoDB에 저장된 자료를 불러올 수 있음.

// Launch server
if(!module.parent) {
	app.listen(app.get("port"));
	console.log("Listening on ", app.get("port"));
}