var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
	id: Number,
	name: String,
	age: Number,
	class: String,
	degree: String
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student; 