
module.exports = function(){
	var routes = require("./routes").call(this);
	this.get("/", routes.index);
}