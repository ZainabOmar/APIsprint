var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
	id: Number,
	title: String,
	author: String,
	category: String,
	rating: String
});

var article = mongoose.model('article', articleSchema);

module.exports = article; 