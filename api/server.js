// BASE SETUP
// =============================================================================

// https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var morgan     = require('morgan');
var http      = require('http');

// app 
var authenticate = require('./app/authenticate');
var usr = require('./app/user');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file

var User = require('./models/user');

var port = process.env.PORT || 8080;        // set our port

var mongoose   = require('mongoose');
mongoose.connect(config.database); // connect to our database

app.set('superSecret', config.secret);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('API processing.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

usr.postUser(router);
usr.getUserRankings(router);
authenticate.authenticateUser(router, app);
authenticate.runMiddleware(router, app);
// authentication required for the functions below
usr.processUsers(router);
usr.processUserById(router);
usr.processUserByIdAdmin(router);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on port ' + port);





// CALL NFL.COM API
// =============================================================================
// http://api.fantasy.nfl.com/v1/players/stats?statType=seasonProjectedStats&position=QB
var options = {
  host: 'api.fantasy.nfl.com',
  path: '/v1/players/stats?statType=seasonProjectedStats&position=QB',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.end();