//require the module
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'me_wedding'
});

module.exports = {

	getAll : function(){
		connection.connect(function(err){
			if(err) {
				console.error('Error connect()', err);
			}
		});
		var promise = new Promise(function(resolve, reject){
			connection.query('SELECT * FROM guest', function (error, results, fields) {
				if (error){
					console.error("Error query()", error);
					reject(error);
				}
				connection.end(function(err){
					if(err) {
						console.error('Error end()', err);
					}
				});
				resolve(results);
			});
		});
		return promise;
	},
	addGuest : function(guest){
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
	}
}
