var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	//var data = { 'showGrid': false};
	projects.showGrid = false;
  	res.render('index', projects);
};

exports.viewGrid = function(req,res){
	//var data = { 'showGrid':true};
	projects.showGrid = true;
	res.render('index', projects);
};