module.exports = function(){
	var routes = {}
	routes.index = function(req, res){
		res.send("hello word");
	}
	return routes;
}