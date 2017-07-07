//grab db definition for use in route handler.
var db = require("../models");

module.exports = function(app) {

		app.get("/", function(req, res){

			db.burgers.findAll({}).then(function(db){
				res.render("index", {burgers: db});
			})
		});

		app.post("/create", function(req, res){
			db.burgers.create({burger_name: req.body.burgerName})
			.then(res.redirect("/"));
		});

		app.put("/burger/eat/:burgId", function(req, res){
			var id = req.params.burgId;
			db.burgers.update({
				devoured: true
			},
			{	
				where: {
					id: id
				}//sequelize knows that it's id key is not the var id lexically defined here.
			}).then(function(dbPut){
				res.redirect("/");
			});
		});
}
