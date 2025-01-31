const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onCall((data, context) => {
    const uid = context && context.auth && context.auth.uid;
    return `${uid} wrote ${data.message}`
});