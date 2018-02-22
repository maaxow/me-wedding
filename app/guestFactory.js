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
					sql: 'SELECT * FROM guest',
					timeout: 100
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
	addGuest : function(guest){
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
	updateGuest : function(guest){

	},
	endConnection : function(){
		connection.destroy();
	}
}
