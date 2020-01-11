import * as functions from 'firebase-functions';
import * as express from 'express';
const app: express.Application = express();
const port = 3000;

app.listen(port, () => {
    console.log('Listening to port: ' + port);
});

app.get('/ping', (req, res) => {
    res.send('Response!!!!!!!!!!!!!!!!!!!!');
});

exports.app = functions.https.onRequest(app);

// https://medium.com/@sandun.isuru/how-to-deploy-nodejs-express-app-to-firebase-as-function-31515c304e70

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
