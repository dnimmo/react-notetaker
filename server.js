// ============
// Server stuff
// ============
var express = require('express');
var app = express();
var server = require('http').createServer(app);
// Serve on port 8080 in dev but port 80 in live! Make this programatic at some point because it's annoying now. :P
var port = 8080;


// Serve files
app.use(express.static(__dirname + "/public"));

server.listen(port, function(){
	console.log("Server listening at port %d", port);
});
