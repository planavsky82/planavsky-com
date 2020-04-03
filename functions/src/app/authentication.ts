//import * as jwt from 'jsonwebtoken';

//import { User } from '../models/user';

// TODO: remove 'any' types

export class Authentication {

	runLoggedInCheck(app: any) {
		return true;
	}
}

/* 
	POST: authenticate
*/
/* exports.authenticateUser = function (router, app) {
    return router.route('/authenticate')
	    .post(function(req, res) {

		  
		});
}; */


/* 
	run middleware
*/
/* exports.runMiddleware = function (router, app) {
	// route middleware to verify a token
    return router.use(function(req, res, next) {

		  // check header or url parameters or post parameters for token
		  var token = req.body.token || req.query.token || req.headers['x-access-token'];

		  // decode token
		  if (token) {

		    // verifies secret and checks exp
		    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
		      if (err) {
		        return res.json({ success: false, message: 'Failed to authenticate token.' });    
		      } else {
		        // if everything is good, save to request for use in other routes
		        req.decoded = decoded;    
		        next();
		      }
		    });

		  } else {

		    // if there is no token
		    // return an error
		    return res.status(403).send({ 
		        success: false, 
		        message: 'No token provided.' 
		    });

		  }
		});
}; */