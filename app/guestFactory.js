//require the module
var mysql = require('mysql');

var handleError = function(err){
	if(err){
		console.error("MYSQL Error", err);
	}
},
createConnection = function(){
	return mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'me_wedding'
	});
}
module.exports = {

	getAll : function(res){
		var _res = res;
		var connection = createConnection();
		connection.connect(function(errorConnect){
			if(errorConnect){
				console.error("MSQLError conection : ", errorConnect.stack);
				return;
			} else {
				connection.query({
					sql: 'SELECT * FROM guest'
				}, function (error, results, fields) {
					if (error){
						console.error("Error query()", error.stack);
						return;
					} else {
						connection.end(function(err){
							if(err){
								console.error("Error ending : ", err.stack);
								return;
							} else {
								_res.send(results);
							}
						});

					}
				});
			}
		});
	},
	add : function(guest){
		var connection = createConnection();
		connection.connect();
		var promise = new Promise(function(resolve, reject){
			connection.query('INSERT INTO guest SET ? ', guest, function (error, results, fields) {
			  if (error){
					console.error("Error insert()", error);
				}
			  console.log('The adding is: ', results);
				resolve(results);
			});
			connection.end();
		});
		return promise;
	},
	update : function(guest){
		var connection = createConnection();
		connection.connect();
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'UPDATE guest SET id=?, firstname=?, lastname=?, email=?, phone_number=?, address=?, post_code=?, city=?, country=?, present=? WHERE id = ?',
				values: [guest.id,
					guest.firstname,
					guest.lastname,
					guest.email,
					guest.phone_number,
					guest.address,
					guest.post_code,
					guest.city,
					guest.country,
					guest.present,
					guest.id]
			}, guest, function (error, results, fields) {
			  if (error){
					console.error("Error update()", error);
				}
			  console.log('The updated is: ', results);
				resolve(results);
			});
			connection.end();
		});
		return promise;
	},
	remove : function(){
	}
}
