var routes = require("./routes");
module.exports = function(){
	routes = routes.call(this);
	this.get("/", routes.index);
	this.post("/auth", routes.auth);
}