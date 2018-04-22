var path = require('path');
var mysql = require('mysql');
var Guest = require('./guestFactory.js');

module.exports = function (app) {

    // GET ALL GUEST
    app.get('/api/guest', function (req, res) {
			Guest.getAll(res);
			// console.log("response", toto)
			// res.send(toto);
			// Guest.getAll().then(function(data){
			// 	res.send(data);
			// });
    });

		// ADD GUEST
		app.post('/api/guest', function(req, res){
			res.send(Guest.add(req.body));
		});

		// UPDATE GUEST
		app.post('/api/guest/update', function(req, res){
			res.send(Guest.update(req.body));
		});

		app.post('/api/guest/delete/:id', function(req, res){
			res.send(Guest.remove(req.params.id))
		})


		app.get('/server/health', function(req, res){
			var connection = mysql.createConnection({
				host     : 'localhost',
        port     : '8889',
				user     : 'root',
				password : 'root',
				database : 'me_wedding'
			});

			connection.connect(function(errorConnect){
				if(errorConnect){
					res.status(400);
					res.send(errorConnect);
				} else {
					connection.end(function(errorEnd){
						if(errorEnd){
							res.status(400);
							res.send(errorEnd);
						} else {
							res.send({ok: true});
						}
					});
				}
			})
		});

    // application -------------------------------------------------------------
    app.get('/*', function (req, res) {
      res.sendFile(path.resolve(__dirname + '/../public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};
