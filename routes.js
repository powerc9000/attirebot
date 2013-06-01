var db = require("./database");
module.exports = function(){
	var routes = {}
	routes.index = function(req, res){
		res.render("index.html");
		
	}
	routes.auth = function(req, res){
		db.auth(req.body.username, req.body.password).then(function(userdata){
			req.session.auth = true;
			req.session.userdata = userdata;
			res.send(200);
		}, function(){
			req.session.auth = false;
			res.send(400);
		});
	}
	return routes;
}