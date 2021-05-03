'use strict';

const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL:'https://[your-project-here]-default-rtdb.europe-west1.firebasedatabase.app'    
  });
const us = admin.initializeApp({
    databaseURL:'https://[your-instance-here].firebaseio.com'
},'us');
const asia = admin.initializeApp({
    databaseURL:'https://[your-instance-here].asia-southeast1.firebasedatabase.app'
},'asia');

// Europe ------------------------
// here's the default DB taken from initializeApp so, no need to specify the instance
// This function grabs the message from the HTTPS and writes to the RTDB
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Here's where that happens
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

// This is the function that works with the onCreate trigger from the RTDB
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      functions.logger.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      //Here's uppercasing.
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });
//------------------------

// US ------------------------

// This function grabs the message from the HTTPS and writes to the RTDB
exports.addMessageUS = functions.https.onRequest(async (req, res) => {
    // Here's where that happens
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database(us).ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  });
  
  // This is the function that works with the onCreate trigger from the RTDB
  exports.makeUppercaseUS = functions.database.instance('testusregion').ref('/messages/{pushId}/original')
      .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.val();
        functions.logger.log('Uppercasing', context.params.pushId, original);
        const uppercase = original.toUpperCase();
        //Here's uppercasing.
        return snapshot.ref.parent.child('uppercase').set(uppercase);
      });
  //------------------------

// Asia ------------------------

// This function grabs the message from the HTTPS and writes to the RTDB
exports.addMessageAsia = functions.https.onRequest(async (req, res) => {
    // Here's where that happens
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database(asia).ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  });
  
  // This is the function that works with the onCreate trigger from the RTDB
  exports.makeUppercaseAsia = functions.database.instance('testasiaregion').ref('/messages/{pushId}/original')
      .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.val();
        functions.logger.log('Uppercasing', context.params.pushId, original);
        const uppercase = original.toUpperCase();
        //Here's uppercasing.
        return snapshot.ref.parent.child('uppercase').set(uppercase);
      });
  //------------------------

//------------------------------------------------
//------------------------------------------------

// Same as above but specifying the function location now on west europe

// Europe ------------------------
// here's the default DB taken from initializeApp so, no need to specify the instance
// This function grabs the message from the HTTPS and writes to the RTDB
exports.addMessageWest1 = functions.region('europe-west1').https.onRequest(async (req, res) => {
  // Here's where that happens
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

// This is the function that works with the onCreate trigger from the RTDB
exports.makeUppercaseWest1 = functions.region('europe-west1').database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      functions.logger.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      //Here's uppercasing.
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });
//------------------------

// US ------------------------

// This function grabs the message from the HTTPS and writes to the RTDB
exports.addMessageUSWest1 = functions.region('europe-west1').https.onRequest(async (req, res) => {
    // Here's where that happens
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database(us).ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  });
  
  // This is the function that works with the onCreate trigger from the RTDB
  exports.makeUppercaseUSWest1 = functions.region('europe-west1').database.instance('testusregion').ref('/messages/{pushId}/original')
      .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.val();
        functions.logger.log('Uppercasing', context.params.pushId, original);
        const uppercase = original.toUpperCase();
        //Here's uppercasing.
        return snapshot.ref.parent.child('uppercase').set(uppercase);
      });
  //------------------------

// Asia ------------------------

// This function grabs the message from the HTTPS and writes to the RTDB
exports.addMessageAsiaWest1 = functions.region('europe-west1').https.onRequest(async (req, res) => {
    // Here's where that happens
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database(asia).ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  });
  
  // This is the function that works with the onCreate trigger from the RTDB
  exports.makeUppercaseAsiaWest1 = functions.region('europe-west1').database.instance('testasiaregion').ref('/messages/{pushId}/original')
      .onCreate((snapshot, context) => {
        // Grab the current value of what was written to the Realtime Database.
        const original = snapshot.val();
        functions.logger.log('Uppercasing', context.params.pushId, original);
        const uppercase = original.toUpperCase();
        //Here's uppercasing.
        return snapshot.ref.parent.child('uppercase').set(uppercase);
      });
  //------------------------