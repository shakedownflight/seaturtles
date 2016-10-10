var express = require('express');

// Router
// var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 7777);

// app.use("/classes", router);

// Serve the client files
app.use("/", express.static(__dirname + "/../client"));
app.get("/hello", (req, res) => {
	return res.send("Hello World!");
});

if (!module.parent) {
	app.listen(app.get("port"));
	console.log("Listening on ", app.get("port"));
}