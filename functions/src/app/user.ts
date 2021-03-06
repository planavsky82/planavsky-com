import * as cors from 'cors';
import * as _ from 'lodash';
import { test } from 'owasp-password-strength-test';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import * as EmailValidator from 'email-validator';

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
    return cors()(req, res, () => {
      const saltRounds = 10;
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
            res.json(requiredMsg);
          } else {
            if (exists) {
              res.json('Username already exists.');
            } else {
              if (email) {
                res.json('Email already exists.');
              } else {
                if (user.email !== req.param('email2')) {
                  res.json('Email addresses do not match.');
                } else {
                  if (EmailValidator.validate(user.email)) {
                    if (user.pwd !== req.param('pwd2')) {
                      res.json('Passwords do not match.');
                    } else {
                      const passwordResult = test(user.pwd);
                      if (passwordResult.errors.length === 0) {
                        const db = this.db;
                        // encrypt password
                        bcrypt.hash(user.pwd, saltRounds).then((hash) => {
                          user.pwd = hash;
                          return db.ref('/users/' + req.param('name')).set(user,
                            function (error: any) {
                              if (error) {
                                res.json('error: ' + error);
                              } else {
                                res.json('User added.');
                              }
                          });
                        }, (err: any) => {
                          res.json(err);
                        });
                      } else {
                        res.json({ message: passwordResult.errors });
                      }
                    }
                  } else {
                    res.json('Email addresses is invalid.');
                  }
                }
              }
            }
          }
        });
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
    return cors()(req, res, () => {
      const error = { success: false, message: 'Authentication failed. Username and/or password do not match.' };
      const config = require('../../config'); // get config file
      const ref = this.db.ref('/users/' + req.param('name'));
      ref.on('value', function (snapshot: any) {
          if (snapshot.exists()) {
            if (snapshot.val().pwd) {
              bcrypt.compare(req.param('pwd'), snapshot.val().pwd).then((result: any) => {
                if (result === true) {
                  // create a token
                  const token = jwt.sign({ user: req.param('name') }, config.secret, {
                    expiresIn: 60*60*24 // expires in 24 hours
                  });
                  res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    id: req.param('name'),
                    match: result
                  });
                } else {
                  res.json(error);
                }
              }, () => {
                res.json(error);
              });
            } else {
              res.json(error);
            }
          } else {
            res.json(error);
          }
      });
    });
  }

  isLoggedIn(req: any, res: any, next: any) {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    const config = require('../../config'); // get config file

    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.secret, (err: any, decoded: any) => {
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
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  }

  getRankings(req: any, res: any) {
    return cors()(req, res, () => {
      res.json({
        players: [
          { player: 'Name1' },
          { player: 'Name2' },
          { player: 'Name3' }
        ]
      });
    });
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
                        res.json(err);
                    res.json(user);
                }); *\/

            });
    }; */
  }
}
