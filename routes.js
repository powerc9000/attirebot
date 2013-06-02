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
			res.send(401);
		});
	}
	routes.logout = function(req, res){
		if(req.session.auth){
			req.session.destroy();

		}
		res.redirect("/")
	}
	routes.checkAuth = function(req, res){
		if(req.session.auth){
			res.send(req.session.userdata);
		}
		else{
			res.send(401);
		}
	}
	return routes;
}