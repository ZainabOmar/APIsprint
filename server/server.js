//require express and mongoose here
//require your middleware and routes here
var mongoose = require('mongoose')
var express = require ('express')

// var middleware = require ('./config/middleware.js')
// var route = require ('./config/routes.js')

var app = express()

mongoose.connect('mongodb://localhost/data');

console.log('Connected correctly to server')

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);
//=============================================================================
/*									Database								 */
//=============================================================================
	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected


var port = 8000;

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port

app.listen(port)

console.log('app is now listening on ' + port)

module.exports = app;