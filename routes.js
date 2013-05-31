module.exports = function(){
	var routes = {}
	routes.index = function(req, res){
		res.render("index.html");
	}
	return routes;
}