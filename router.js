var routes = require("./routes");
module.exports = function(){
	routes = routes.call(this);
	this.get("/", routes.index);
	this.post("/auth", routes.auth);
	this.get("/auth", routes.checkAuth);
	this.get("/logout", routes.logout);
	this.get("/home", routes.index);
}