import * as cors from 'cors';
import * as _ from 'lodash';
//import { test } from 'owasp-password-strength-test';
//import * as jwt from 'jsonwebtoken';

import { UserModel } from '../models/user';

// TODO: remove 'any' types

export class User {
  public db: any;

  connect(adminDb: any) {
    this.db = adminDb;
  }

  postUser(req: any, res: any) {
    // https://firebase.google.com/docs/database/web/read-and-write

    const user: UserModel = {
      name: req.param('name'),
      pwd: req.param('pwd'),
      admin: false,
      email: req.param('email')
    };

    this.userExists(req.param('name')).then((exists: any) => {
      this.userEmailExists(req.param('email')).then((email: any) => {
        let requiredMsg = ' field(s) required.'
        if (!user.name || user.name === '') {
          requiredMsg = 'Name ' + requiredMsg;
        }
        if (!user.pwd || user.pwd === '') {
          requiredMsg = 'Password ' + requiredMsg;
        }
        if (!user.email || user.email === '') {
          requiredMsg = 'Email ' + requiredMsg;
        }

        if (requiredMsg !== ' field(s) required.') {
          res.send(requiredMsg);
        } else {
          if (exists) {
            res.send('Username already exists.');
          } else {
            if (email) {
              res.send('Email already exists.');
            } else {
              if (user.email !== req.param('email2')) {
                res.send('Email addresses do not match.');
              } else {
                if (user.pwd !== req.param('pwd2')) {
                  res.send('Passwords do not match.');
                } else {
                  return this.db.ref('/users/' + req.param('name')).set(user,
                    function (error: any) {
                      if (error) {
                        res.send('error: ' + error);
                      } else {
                        res.send('User added.');
                      }
                    });
                }
              }
            }
          }
        }
      });
    });

    /* // create a user (accessed at POST http://localhost:8080/api/users)
        .post(function(req, res) {

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
                });
            });
        });
    */
  }

  userExists(userName: string) {
    const ref = this.db.ref('/users/' + userName);
    return ref.once('value').then(function (snapshot: any) {
      return snapshot.exists();
    });
  }

  userEmailExists(email: string) {
    const ref = this.db.ref('/users').orderByChild('email').equalTo(email);
    return ref.once('value').then(function (snapshot: any) {
      return snapshot.exists();
    });
  }

  getUser(req: any, res: any): UserModel {
    const ref = this.db.ref('/users/' + req.param('name'));
    return ref.on('value', function (snapshot: any) {
      return cors()(req, res, () => {
        return snapshot;
      });
    });
    /* .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
        });
    */
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
  }

  getUserByIdAdmin() {
    return true;
  }

  getUserRankings() {
    return true;
  }

  authenticate(req: any, res: any) {
    const ref = this.db.ref('/users');
    ref.on('value', function (snapshot: any) {
      return cors()(req, res, () => {
        res.send(snapshot);
      });
    });

    // find the user
    /* User.findOne({
        name: req.body.name
    }, function(err, user) {

        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, app.get('superSecret'), {
                    expiresIn: 60*60*24 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    id: user._id
                });
            }

        }
    }); */
  }

  runLoggedInMiddleware(app: any) {
    return true;

    // route middleware to verify a token
    // return router.use(function(req, res, next) {

    /* // check header or url parameters or post parameters for token
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

    } */
  }

  editDelete() {
    return true;
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
  }

  getRankings() {
    return true;
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
  }
}
