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
// https://cloud.google.com/docs/authentication/production
// applicationDefault() will use the credentials on the firebase server,
// so with this setup, you need to deploy to firebase functions to test code
// there is a way to define credentials locally in this link as well. not sure
// yet if that makes things easier or not, consider the realtime database is still remote.

app.listen(port, () => {
  console.log('Listening to port: ' + port);
  user.connect(admin.database());
});

// authenticate
app.post('/authenticate', (req, res) => {
  user.authenticate(req, res);
});

// get single user
app.get('/user', (req, res) => {
  user.getUser(req, res);
});

// register user
app.post('/user', (req, res) => {
  user.postUser(req, res);
});

// get all users, run middleware first
app.get('/users', (req, res) => {
  user.runLoggedInMiddleware(app);
});

// get user rankings
app.get('/rankings', (req, res) => {
  console.log('process');
});

// post user rankings
app.post('/rankings', (req, res) => {
  console.log('process');
});

// edit user rankings
app.put('/rankings', (req, res) => {
  console.log('process');
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
