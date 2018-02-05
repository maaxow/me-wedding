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
				console.error('error connect()', err);
				// throw err;
			}
		});
		var promise = new Promise(function(resolve, reject){
			connection.query('SELECT * FROM guest', function (error, results, fields) {
				if (error) throw error;
				//console.log('The solution is: ', results);
				resolve(results);
				connection.end(function(err){
					if(err) {
						console.error('error connect()', err);
						// throw err;
					}
				});
			});
		});
		return promise;
	},
	addGuest : function(guest){
		var params = {
			firstname: guest.firstname,
			lastname: guest.lastname,
			email: guest.email,
			phone_number: guest.phone_number,
			address: guest.address,
			post_code: guest.post_code,
			city: guest.city,
			country: guest.country,
			present: guest.present
		};
		connection.connect();
		var promise = new Promise(function(resolve, reject){
			connection.query('INSERT INTO guest SET ? ', params, function (error, results, fields) {
			  if (error) throw error;
			  console.log('The adding is: ', results);
				resolve(results);
			});
			connection.end();
		});
		return promise;
	}
}
