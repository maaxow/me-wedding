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
		database : CONSTANTS.DATABASE.DATABASE,
		port 		 : CONSTANTS.DATABASE.PORT
	});
}
module.exports = {

	getAll : function(){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM gift'
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
	findById : function(giftId){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM gift WHERE gift_id = ?',
				values : [ giftId ]
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
	findByName : function(giftName){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM gift WHERE gift_name LIKE ?',
				values : ["%" + giftName + "%"]
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
	add : function(gift){
		var connection = createConnection();
		connection.connect();
		var promise = new Promise(function(resolve, reject){
			connection.query('INSERT INTO gift(gift_name, gift_description, gift_total) VALUES ("'+gift.name+'", "'+gift.description+'", '+gift.total+') ',
			function (error, results, fields) {
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
	update : function(gift){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'UPDATE gift SET gift_id=?, gift_name=?, gift_description=?, gift_total=? WHERE gift_id = ?',
				values: [gift.gift_id,
					gift.gift_name,
					gift.gift_description,
					gift.gift_total,
					gift.id]
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
	remove : function(giftId){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'DELETE FROM guest WHERE gift_id = ?',
				values: [ giftId ]
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
