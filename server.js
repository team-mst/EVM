var express = require('express');
	stylus = require('stylus');
var path = require('path');
// var mongoose = require('mongoose');
var config = require('./config');
var bodyParser =  require("body-parser");
var morgan =  require("morgan");
var routes = require('./routes/routes.js');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var uri = 'mongodb://localhost/mongoose-shared-connection';
// global.db = mongoose.createConnection(uri);

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var dbAPI = require('./server/data/dataAPI.js');

//var db = mongoose.connect('localhost', config.database, function(err) {
//	if (err) {
//		console.log(err);
//	} else{
//		console.log('Connected to the database');
//	}
//});

function compile(str,path) {
	return(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.engine('html', require('consolidate').handlebars);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(stylus.middleware(
	{
		src: __dirname + '/public',
		compile: compile
	}
	));
app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.use('/', routes);

// app.get('*', function(req, res) {
// 	res.render('index');
// })


http.listen(config.port);
console.log('Listening on port ' + config.port + '...');
// SOCKET IO
io.on('connection', function(client) {
   console.log('socket io is actually working');
   // disconnect event
   /* disconnect */    
   client.on('disconnect', function() {
       console.log(client.id + ' has disconnected from the server');
   });
   // TESTING FUNCTION FOR SOCKET IO
   client.on('testGet', function() {
       client.emit('r-Test', "Test data from server", undefined);
   });
});
