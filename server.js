// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 8282; 				// set the port
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
//app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/routes.js')(app);
var server = require('http').createServer(app);

// logger ======================================================================
// const log4js = require('log4js');
// log4js.configure({
// 	appenders: {
// 		rollingFile: { type: 'file', filename: 'app.log', maxLogSize: 5000 }
// 	},
// 	categories: {
// 		default: { appenders : ['rollingFile'], level: 'debug' }
// 	}
// });
// var logger = log4js.getLogger('rollingFile');
// logger.level = 'debug';
// logger.debug("Some debug trace !");

// listen (start app with node server.js) ======================================
server.listen(port);

console.log("App listening on port " + port);
// logger.info("App listening on port " + port);
