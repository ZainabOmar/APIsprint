//require some files here
var bodyParser = require('body-parser')
var express = require ('express')
var morgan = require('morgan')
var request = require('request');

// console.log(__dirname)
module.exports = function (app, express) {

  //use middleware to provide concise output colored by response status for development use
  app.use(morgan('combined'))
  //use middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body.
  app.use(bodyParser.urlencoded({extended: true}))

  //use middleware that only parses json
  app.use(bodyParser.json())

  //use the built in middleware to serve static files such as images, CSS files, and JavaScript files.
  app.use('/static',  express.static(__dirname + '../client'))
};
