import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import { Authentication } from './app/authentication';

//var usr = require('./app/user');

const app: express.Application = express();
const port = 3000;
let authentication = new Authentication();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://planavsky-com.firebaseio.com/'
});  //by adding your credentials, you get authorized to read and write from the database

app.listen(port, () => {
    console.log('Listening to port: ' + port);
});

authentication.authenticateUser();
authentication.runMiddleware();

app.get('/ping', (req, res) => {
  const db = admin.database();
  const ref = db.ref('users');

  const usersRef = ref.child("data");
  usersRef.set({
      user1: {
        username: "user1",
        password: "pwd"
      },
      user2: {
        username: "user2",
        password: "pwd"
      }
  })
  .then(() => {
    console.log('this will succeed');
  })
  .catch(err => console.log('error'));
});

app.get('/user', (req, res) => {
  const db = admin.database();
  const ref = db.ref('/users');
  ref.on('value', function(snapshot: any) {
    return cors()(req, res, () => {
      res.send(snapshot);
    });
  });
});

app.post('/user', (req, res) => {
  // https://firebase.google.com/docs/database/web/read-and-write
  const db = admin.database();
  return db.ref('/users').push({ 
    name: 'xyz',
    pwd: 'abc'
  }, function(error) {
    if (error) {
      res.send('error: ' + error);
    } else {
      res.send('added!');
    }
  });
});

exports.app = functions.https.onRequest(app);

// https://stackoverflow.com/questions/42755131/enabling-cors-in-cloud-functions-for-firebase

// https://medium.com/@sandun.isuru/how-to-deploy-nodejs-express-app-to-firebase-as-function-31515c304e70

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
