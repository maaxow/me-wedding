var path = require('path');
var version = require('../package').version;
var mysql = require('mysql');
var Guest = require('./guestFactory.js');
var Gift = require('./gift.factory.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var CONSTANTS = require('../config/constants');


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


module.exports = function (app) {

		app.post('/login', passport.authenticate('local', {
			successRedirect: '/admin',
			failureRedirect: '/login',
			failureFlash: true
		}));
    // GET ALL GUEST
    app.get('/guest', function (req, res) {
			Guest.getAll().then(function(data){
				res.send(data);
			})
    });

		// GET BY ID
		app.get('/guest/:id', function (req, res) {
			Guest.findById(req.params.id).then(function(data){
				res.send(data);
			});
		});

		app.post('/guest/find', function(req, res){
			Guest.findByLastName(req.body.lastname).then(function(response){
				res.send(response);
			});
		});

		// ADD GUEST
		app.post('/guest',
			/*passport.authenticate('local', {session: false}),*/ function(req, res){
				Guest.add(req.body).then(function(response){
					res.send(response);
				})
		});

		// UPDATE GUEST
		app.post('/api/guest/update', function(req, res){
			Guest.update(req.body).then(function(response){
				res.send(response);
			})
		});

		app.post('/guest/:id/_delete', function(req, res){
			Guest.remove(req.params.id).then(function(response){
				res.send(response);
			});
		})

    // GET ALL GUEST
    app.get('/guest', function (req, res) {
			Guest.getAll().then(function(data){
				res.send(data);
			})
    });

		// GET BY ID
		app.get('/guest/:id', function (req, res) {
			Guest.findById(req.params.id).then(function(data){
				res.send(data);
			});
		});

		app.post('/guest/find', function(req, res){
			Guest.findByLastName(req.body.lastname).then(function(response){
				res.send(response);
			});
		});

// ################### GIFT ####################################

		// ADD GIFT
		app.post('/api/gift', function(req, res){
				Gift.add(req.body).then(function(response){
					res.send(response);
				});
		});

		// UPDATE GIFT
		app.post('/api/gift/update', function(req, res){
			Gift.update(req.body).then(function(response){
				res.send(response);
			})
		});
    // DELETE GIFT
		app.post('/gift/:id/_delete', function(req, res){
			Gift.remove(req.params.id).then(function(response){
				res.send(response);
			});
		})

    // GET ALL GIFT
    app.get('/gift', function (req, res) {
			Gift.getAll().then(function(data){
				res.send(data);
			})
    });

		// GET BY ID GIFT
		app.get('/gift/:id', function (req, res) {
			Gift.findById(req.params.id).then(function(data){
				res.send(data);
			});
		});

    // GET PARTICIPANTS BY GIFT ID
    app.get('/participants/:giftId', function (req, res) {
			Gift.findById(req.params.id).then(function(data){
				res.send(data);
			});
		});

		app.get('/server/health', function(req, res){
			var connection = mysql.createConnection({
				host     : CONSTANTS.DATABASE.HOST,
				user     : CONSTANTS.DATABASE.USER,
				password : CONSTANTS.DATABASE.PWD,
				database : CONSTANTS.DATABASE.DATABASE,
        port     : CONSTANTS.DATABASE.PORT
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

    app.get('/server/version', function(req, res){
      res.send(version);
    });
    // application -------------------------------------------------------------
    app.get('/*', function (req, res) {
      res.sendFile(path.resolve(__dirname + '/../public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};
