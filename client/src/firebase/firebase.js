var firebase = require('firebase');
var Excel = require('exceljs');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCW6rH9OtlQgqqJOmRebSll1uEJL1fQIAs",
    authDomain: "concedii-b16df.firebaseapp.com",
    databaseURL: "https://concedii-b16df.firebaseio.com",
    projectId: "concedii-b16df",
    storageBucket: "concedii-b16df.appspot.com",
    messagingSenderId: "987388293685"
  };

firebase.initializeApp(config);
let db = firebase.database();

var ref = db.ref("employees/");
var count = 0;

var testDb = function() {
    var names = '';
    ref.on('value',function(snap) {
        snap.forEach(function(child) {
            if(child.val().name != undefined){
              names += child.val().name;
            }
          });
    });

    return names;
}

module.exports.testDb = testDb;
