//require the module
var mysql = require('mysql');
var CONSTANTS = require('../config/constants')

var handleEnd = function(err){
	if(err) console.error("MySQLEndingError :", err);
},
handleConnection = function(err){
	if(err) console.error("MySQLConnectionError :", err);
},
createConnection = function(){
	return mysql.createConnection({
		host     : CONSTANTS.DATABASE.HOST,
		user     : CONSTANTS.DATABASE.USER,
		password : CONSTANTS.DATABASE.PWD,
		database : CONSTANTS.DATABASE.DATABASE
	});
}
module.exports = {

	getAll : function(){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM guest'
			}, function (error, results, fields) {
				if (error){
					console.error("MySQLQueryError :", error);
					reject(error);
					return;
				}
				resolve(results);
			});
			connection.end(handleEnd);
		});
		return promise;
	},
	findById : function(guestId){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM guest WHERE id = ?',
				values : [guestId]
			}, function (error, results, fields) {
				if (error){
					console.error("MySQLQueryError :", error);
					reject(error);
					return;
				}
				resolve(results);
			});
			connection.end(handleEnd);
		});
		return promise;
	},
	findByLastName : function(guestLastName){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM guest WHERE lastname LIKE ?',
				values : ["%" + guestLastName + "%"]
			}, function (error, results, fields) {
				if (error){
					console.error("MySQLQueryError :", error);
					reject(error);
					return;
				}
				resolve(results);
			});
			connection.end(handleEnd);
		});
		return promise;
	},
	add : function(guest){
		var connection = createConnection();
		connection.connect();
		var promise = new Promise(function(resolve, reject){
			connection.query('INSERT INTO guest SET ? ', guest, function (error, results, fields) {
			  if (error){
					console.error("MySQLInsertError :", error);
					reject(error);
					return;
				}
				resolve(results);
			});
			connection.end();
		});
		return promise;
	},
	update : function(guest){
		var connection = createConnection();
		connection.connect(handleConnection);
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
			}, function (error, results, fields) {
			  if (error){
					console.error("MySQLUpdateError :", error);
					reject(error);
					return;
				}
				resolve(results);
			});
			connection.end(handleEnd);
		});
		return promise;
	},
	remove : function(id){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'DELETE FROM guest WHERE id = ?',
				values: [id]
			}, function (error, results, fields) {
			  if (error){
					console.error("MySQLDeleteError :", error);
					reject(error);
					return;
				}
				resolve(results);
			});
			connection.end(handleEnd);
		});
		return promise;
	}
}
