var mongodb = require('./db');

module.exports.get = function (name, callback){
	mongodb.open(function (err, db){
		if (err){
			return callback(err);
		}

		db.collection('user', function (err, collection){
			if (err) {
				mongodb.close();
				return callback(err);
			}

			collection.findOne({ name : name }, function (err, user){
				mongodb.close();
				if (err){
					return callback(err);
				}
				callback(null, user);
			})
		})
	})
}
