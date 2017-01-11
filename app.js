var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// create a new express server
var app = express();
var http = require('http'); // may ahve to remove
var server = require('http').Server(app);

// cloud foundry
var cfenv = require('cfenv');

/**
 * Get port from environment and store in Express.
 */

var port =  cfenv.getAppEnv().port;
var host = cfenv.getAppEnv().bind;
app.set('port', port);
app.set('host', host);

//console.log(`PORT: ${port}`);
//console.log(`HOST: ${host}`);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
//server.on('error', onError);
//server.on('listening', onListening);

// initialized socket.io
var io = require('socket.io')(server);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// middleware to make io accessible to routers
app.use(function(req, res, next) {
  req.io = io;
  next();
});

// require routes
app.use(require('./controllers'));

// require sockets
require('./sockets/sockets.js')(io);
