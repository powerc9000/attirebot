var db = require("./database");
module.exports = function(){
	var routes = {}
	routes.index = function(req, res){
		res.render("index.html");
		db.auth().then(function(docs){
			console.log(docs)
		});
	}
	routes.auth = function(){

	}
	return routes;
}