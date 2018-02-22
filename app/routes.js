var path = require('path');
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

		app.post('/api/guest', function(req, res){
			console.log("request", req.body);
			Guest.addGuest(req.body);
		});

    // application -------------------------------------------------------------
    app.get('/*', function (req, res) {
      res.sendFile(path.resolve(__dirname + '/../public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};
