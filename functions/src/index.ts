import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import { User } from './app/user';

const app: express.Application = express();
const port = 3000;
const user = new User();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://planavsky-com.firebaseio.com/'
});  //by adding your credentials, you get authorized to read and write from the database

app.listen(port, () => {
  console.log('Listening to port: ' + port);
});

// authenticate
app.post('/authenticate', (req, res) => {
  user.authenticate(admin.database(), req, res);
});

// get single user
app.get('/user', (req, res) => {
  user.getUser(admin.database(), req, res);
});

// register user
app.post('/user', (req, res) => {
  user.postUser(admin.database(), req, res);
});

// get all users, run middleware first
app.get('/users', (req, res) => {
  user.runLoggedInMiddleware(app); 
});

// get user rankings
app.get('/rankings', (req, res) => {

});

// post user rankings
app.post('/rankings', (req, res) => {

});

// edit user rankings
app.put('/rankings', (req, res) => {

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
