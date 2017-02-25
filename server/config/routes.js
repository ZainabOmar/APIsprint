//you need to require some files here
var articleController = require ('../articles/articleController.js')
var studentController = require ('../student/studentController.js')
// var app1 = require ('../server.js')
var express = require ('express')

// var middleware = require ('./middleware.js')


module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	app.get('/api/articles/getAll', articleController.getAllArticles);
	app.get('/api/articles/getByTitle/:id', articleController.getByTitle);

	app.get('/api/students/getAll', studentController.getAllStudents);
	app.get('/api/students/getByName/:id', studentController.getByName);

	//here you have to add two more routes
	
//=============================================================================
/*								book route									 */
//=============================================================================
	app.post('/api/students/insertStudent', studentController.insertStudent);
	app.post('/api/articles/insertArticle', articleController.insertArticle);

	//here you have to add two more routes

};

