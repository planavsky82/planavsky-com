import * as cors from 'cors';
import * as _ from 'lodash';
import { test } from 'owasp-password-strength-test';
import * as jwt from 'jsonwebtoken';

import { UserModel } from '../models/user';

// TODO: remove 'any' types

export class User {
  public db: any;

  connect(adminDb: any) {
    this.db = adminDb;
  }

  postUser(req: any, res: any) {
    // create a user (accessed at POST https://us-central1-planavsky-com.cloudfunctions.net/app/user)
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
                  const passwordResult = test(user.pwd);
                  if (passwordResult.errors.length === 0) {
                    return this.db.ref('/users/' + req.param('name')).set(user,
                      function (error: any) {
                        if (error) {
                          res.send('error: ' + error);
                        } else {
                          res.send('User added.');
                        }
                      });
                  } else {
                    res.send({ message: passwordResult.errors });
                  }
                }
              }
            }
          }
        }
      });
    });
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

  authenticate(req: any, res: any) {
    // authenticate a user (accessed at POST https://us-central1-planavsky-com.cloudfunctions.net/app/authenticate)

    const config = require('../../config'); // get config file
    const ref = this.db.ref('/users/' + req.param('name'));
    ref.on('value', function (snapshot: any) {
      return cors()(req, res, () => {
        if (snapshot.exists() && snapshot.val().pwd === req.param('pwd')) {
          // create a token
          let token = jwt.sign({ user: req.param('name') }, config.secret, {
            expiresIn: 60*60*24 // expires in 24 hours
          });
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token,
            id: req.param('name')
          });
        } else {
          res.json({ success: false, message: 'Authentication failed. Username and/or password do not match.' });
        }
      });
    });
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
