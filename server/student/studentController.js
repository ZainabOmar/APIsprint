//require files here
var Student = require ('./studentModel.js')
// var db = Student.Mongoose.models;


module.exports = {
	getAllStudents: function (req, res) {
		var student = req.body;
		Student.find({})
		.exec(function (err, student) {
			if (err) throw err;
			else {
				res.status(200).send(student)
			}
		})
	},

	insertStudent : function (req, res) {
		var student = req.body;

		var newstudent = new Student({ name: student.name, 
			age: student.age,
			class: student.class, 
			degree: student.degree });
		
		newstudent.save(function (err, newStu) {
			if (err) throw err;
			else {
				// console.log(newStu)
				res.status(200).send(newStu)
			}
		})
	},


	getByName: function (req, res) {
		var id = req.params.id;
		Student.findOne({ _id: id })
		.exec(function (err, student) {
			if (err) throw err;
		 // function (student, err) {
			// console.log(student)
			// if (err) throw err;
			else {
				res.status(200).send(student)
			}
		})
	}

	//you have to use the books model to make a new database entry 
	
	//you need to use params.id to find a books from your database
	
}