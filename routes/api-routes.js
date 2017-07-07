var express = require("express");
var Burger = require("../models/burgers.js");

var router = express.Router();
module.exports = function(app) {

	app.get("/", function(req, res){ 
		res.render("index", {burgers: Burger})
	})
}