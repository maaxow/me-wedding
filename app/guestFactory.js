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
		connection.connect();
		connection.query('SELECT * FROM guest', function (error, results, fields) {
		  if (error) throw error;
		  console.log('The solution is: ', results);
			return results;
		});
		connection.end();
	},
	addGuest : function(first, last, email){
		var params = {
			firstname: first,
			lastname: last,
			email: email,
			phone_number: '000',
			address: '13 rue machin',
			post_code: '59000',
			city: 'Lille',
			country: 'France',
			present: 1
		};
		connection.connect();
		connection.query('INSERT INTO guest SET ? ', params, function (error, results, fields) {
		  if (error) throw error;
		  console.log('The adding is: ', results);
			return results;
		});
		connection.end();
	}
}
