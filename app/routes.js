var path = require('path');
var camera = require('camera');

module.exports = function (app) {

    // GET ALL
    app.get('/api/startCamera', function (req, res) {
        // send video stream
        var webcam = camera.createStream();

        webcam.on('data', function(buffer){
          console.log("data camera", buffer);
        });

    });

    // POST GET WITH QUERY PARAMS
    app.post('/api/money', function (req, res) {

      getMoneySpecific(res, req.body);
    });

    // application -------------------------------------------------------------
    app.get('/*', function (req, res) {
      res.sendFile(path.resolve(__dirname + '/../public/index.html')); // load the single view file (angular will handle the page changes on the front-end)
    });
};
