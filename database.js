var mongo = require('mongodb'),
	DB = mongo.Db,
	Server = mongo.Server,
	MongoClient = mongo.MongoClient,
	q = require("q");
	bcrypt = require("bcrypt");
module.exports = (function(){
	var database = {};
	var db = new DB("attirebot", new Server("localhost", 27017), {w:1});
	database.auth = function(username, password){
		var deferred = q.defer();
		var compare;
		username = username || "";
		password = password || "";
		compare = q.nfbind(bcrypt.compare);
		db.open(function(err, db){
			collection = db.collection("users")
			collection.findOne({$or:[{username:username}, {email:username}]}, function(err, docs){
				console.log(err, docs)
				if(docs){
					compare(password, docs.password).then(function(auth){
						if(auth){
							deferred.resolve(docs)
						}
						else{
							deferred.reject();
						}
					});
					
				}
				else{
					deferred.reject();
				}
				db.close();
			})
		})
		return deferred.promise;
	}
	return database;
}())