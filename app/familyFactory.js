//require the module
var mysql = require('mysql');
var CONSTANTS = require('../config/constants');

var handleEnd = function(err){
	if(err) console.error("MySQLEndingError :", err);
},
handleConnection = function(err){
	if(err) console.error("MySQLConnectionError :", err);
},
createConnection = function(){
	return mysql.createConnection({
		host     : CONSTANTS.BDD.HOST,
		user     : CONSTANTS.BDD.USER,
		password : CONSTANTS.BDD.PWD,
		database : CONSTANTS.BDD.DATABASE
	});
}
module.exports = {

	getAll : function(){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM family'
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
	findById : function(familyId){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM family WHERE id = ?',
				values : [familyId]
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
	findByLastName : function(familyName){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'SELECT * FROM family WHERE lastname LIKE ?',
				values : ["%" + familyName + "%"]
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
	add : function(family){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query('INSERT INTO family SET ? ', family, function (error, results, fields) {
			  if (error){
					console.error("MySQLInsertError :", error);
					reject(error);
					return;
				}
				resolve(results);
			});
			connection.end(handleEnd);
		});
		return promise;
	},
	update : function(family){
		var connection = createConnection();
		connection.connect(handleConnection);
		var promise = new Promise(function(resolve, reject){
			connection.query({
				sql: 'UPDATE family SET id=? WHERE id = ?',
				values: [family.id,
					//TODO finish
					family.id]
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
				sql: 'DELETE FROM family WHERE id = ?',
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
