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

app.post('/authenticate', (req, res) => {
  user.authenticate(admin.database(), req, res);
});

app.get('/user', (req, res) => {
  user.getUser(admin.database(), req, res);
});

app.post('/user', (req, res) => {
  user.postUser(admin.database(), req, res);
});

app.get('/users', (req, res) => {
  user.runLoggedInMiddleware(app); 
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
