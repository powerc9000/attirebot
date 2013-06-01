var mongo = require('mongodb'),
	DB = mongo.Db,
	Server = mongo.Server,
	MongoClient = mongo.MongoClient,
	q = require("q");
module.exports = (function(){
	var database = {};
	var db = new DB("attirebot", new Server("localhost", 27017), {w:1});
	database.auth = function(username, password){
		var deferred = q.defer();
		db.open(function(err, db){
			collection = db.collection("users")
			collection.find().toArray(function(err, docs){
				deferred.resolve(docs);
			})
		})
		return deferred.promise;
	}
	return database;
}())