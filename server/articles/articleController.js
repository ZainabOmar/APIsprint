//require the model here
var Article = require ('./articleModel.js')

module.exports = {
	getAllArticles : function (req, res) {
		var article = req.body;
		Article.find({})
		.exec(function (err, article) {
			if (err) throw err;
			else {
				res.status(200).send(article)
			}
		})
	},

	insertArticle: function (req, res) {
		var articles = req.body;

		articles.forEach(function (article) {
			Article.create(article, function (err, newArt){
				if (err) {
					res.status(500).send(err)
				}
				else {
					console.log(newArt)
					//res.status(200).send("has been inserted")
				}
			}) 
		})
		res.status(200).send("has been inserted")
		// console.log(article)

		// var newArticle = new Article({ title: article.title, 
		// 	author: article.author,
		// 	category: article.category, 
		// 	rating: article.rating });

		// newArticle.save(function (err, newArt) {
		// 	console.log(newArt)
		// 	if (err) throw err;
		// 	else {
		// 		for (var i = 0; i < article.length; i++) {
		// 		// newArt.title = article[i].title
		// 		// newArt.author = article[i].author
		// 		// newArt.category = article[i].category
		// 		// newArt.rating = article[i].rating

		// 			data.push(newArt)
		// 		}
		// 		res.status(200).send(data)
		// 	}
		// })
	},

	getByTitle: function (req, res) {
		var id = req.params.id;
		console.log(id)

		Article.findOne({ _id: id })
		.exec(function (err, article) {
			console.log(article)
			if (err) throw err;
		 // function (student, err) {
			// console.log(student)
			// if (err) throw err;
			else {
				res.status(200).send(article)
			}
		})
	}
//you have to use the movie model to make a new database entry 

//you need to use params.id to find a movie from your database

}