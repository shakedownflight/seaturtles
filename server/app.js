var express = require('express');

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


// Launch server
if(!module.parent) {
	app.listen(app.get("port"));
	console.log("Listening on ", app.get("port"));
}