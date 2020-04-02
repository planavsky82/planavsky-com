import { UserModel } from '../models/user';
//import { test } from 'owasp-password-strength-test';
import * as cors from 'cors';
import * as _ from 'lodash';

export class User {
  postUser() {
    return true;
  }

  getUser(adminDb: any, req: any, res: any): UserModel {
    const ref = adminDb.ref('/users');
    return ref.on('value', function(snapshot: any) {
      return cors()(req, res, () => {
        res.send(snapshot);
      });
    });
  }

  getUserByIdAdmin() {
    return true;
  }

  getUserRankings() {
    return true;
  }
}

/* 
    POST
*/  
/* exports.postUser = function (router) {
    return router.route('/users')
        // create a user (accessed at POST http://localhost:8080/api/users)
        .post(function(req, res) {

            var user = new User();      // create a new instance of the User model
            user.name = req.body.name;  // set the user's name (comes from the request)
            user.password = req.body.password; 
            user.password2 = req.body.password2; 
            user.email = req.body.email;

            // check for pre-existing user names
            User.findOne({ name: req.body.name }, function(err, existingUser) {
                User.findOne({ email: req.body.email }, function(err, existingEmail) {
                    if (user.name && user.password && user.email) {
                        if (user.password === user.password2) {
                            if (!existingUser) {
                                if (!existingEmail) {
                                    var passwordResult = owasp.test(user.password);
                                    if (passwordResult.errors.length === 0) {
                                        // save the user and check for errors
                                        user.save(function(err) {
                                            if (err)
                                                res.send(err);
                    
                                            res.json({ message: 'User created!' });
                                        });
                                    } else {
                                        res.send({ message: passwordResult.errors });
                                    }
                                } else {
                                    res.send({ message: 'Email already exists.' });
                                }
                            } else {
                                res.send({ message: 'User Name already exists.' });
                            }
                        } else {
                            res.send({ message: 'Passwords do not match.' });
                        }
                    } else {
                        res.send({ message: 'User Name, Password, and Email are required.' });
                    }
                });
            });
        });
}; */

/* 
    GET
*/  
/* exports.processUsers = function (router) {
    return router.route('/users')
        .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);
    
                res.json(users);
            });
        });
}; */


/* 
    GET(single)
*/
/* exports.processUserById = function (router) {
    // on routes that end in /users/:user_id
    // ----------------------------------------------------
    return router.route('/users/:user_id')

        // get the user with that id (accessed at GET http://localhost:8080/api/users/:user_id)
        .get(function(req, res) {
            User.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            });
        });
}; */

/* 
    PUT, DELETE
*/
/* exports.processUserByIdAdmin = function (router) {
    // on routes that end in /users/:user_id
    // ----------------------------------------------------
    return router.route('/users/:user_id')

        // update the user with this id (accessed at PUT http://localhost:8080/api/users/:user_id)
        .put(function(req, res) {
            // use our user model to find the user we want
            \/* User.findById(req.params.user_id, function(err, user) {

                if (err)
                    res.send(err);

                user.name = req.body.name;  // update the users info

                // save the user
                user.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'User updated!' });
                });

            }); *\/
        })

        // delete the user with this id (accessed at DELETE http://localhost:8080/api/users/:user_id)
        .delete(function(req, res) {
            /* User.remove({
                _id: req.params.user_id
            }, function(err, user) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            }); *\/
        });
}; */

/* exports.getUserRankings = function (router) {
    // on routes that end in /users/:user_id
    // ----------------------------------------------------
    return router.route('/users/:user_id/rankings')

        .get(function(req, res) {

            var options = {
                host: 'api.fantasy.nfl.com',
                path: '/v1/players/stats?statType=seasonProjectedStats&position=QB',
                method: 'GET'
            };
            
            var reqData = http.request(options, function(resData) {
                console.log('STATUS: ' + resData.statusCode);
                console.log('HEADERS: ' + JSON.stringify(resData.headers));
                resData.setEncoding('utf8');
                resData.on('data', function (chunk) {
                    console.log('BODY: ' + chunk);
                    resData.json({
                        rankings: [chunk]
                    });
                });
            });
            
            reqData.on('error', function(e) {
                console.log('problem with request: ' + e.message);
            });
            
            // write data to request body
            reqData.write('data\n');
            reqData.write('data\n');
            reqData.end();
            
            /* User.findById(req.params.user_id, function(err, user) {
                if (err)
                    res.send(err);
                res.json(user);
            }); *\/
            
        });
}; */