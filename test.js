var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var db = new Db('Blog', new Server('localhost',27017));
	
	db.open(function (err, db){
		var collection = db.collection('users');

		collection.findOne({
			name : 'zzb'
		}, function (err, user){
			db.close();
			if (err) {
				console.log(err);
			}
			console.log(user.email);
		})

	})