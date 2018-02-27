"use strict";

module.exports = function(app) {
    var forReact = require('../controllers/forReact');
    var firebase = require('../firebase/firebase');
  
    app.route('/firebaseData')
      .get(forReact.getDataFromFirebase);
    
    app.route('/testing')
      .get(firebase.testingData);
  };