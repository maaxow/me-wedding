var path = require('path');
var version = require('./package').version;
var mysql = require('mysql');
var Guest = require('./guestFactory.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


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
    app.get('/api/guest', function (req, res) {
			Guest.getAll(res);
			// console.log("response", toto)
			// res.send(toto);
			// Guest.getAll().then(function(data){
			// 	res.send(data);
			// });
    });

		// ADD GUEST
		app.post('/api/guest',
			passport.authenticate('local', {session: false}), function(req, res){
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
				password : 'yrv\'xrjbx',
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

    app.get('/server/version', function(req, res){
      res.send(version);
    });
    // application -------------------------------------------------------------
    app.get('/*', function (req, res) {
      res.sendFile(path.resolve(__dirname + '/../public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};
