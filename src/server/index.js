let express = require('express');
let firebase = require('../../firebase');
let login = require('../../login');
let logger = require('morgan');

let app = express();

let port = process.env.APP_PORT || 3000;

app.use(express.static(__dirname +'./../../')); //serves the index.html
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Authorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Headers'
    );
    next();
  });
app.use(login.Router);
// app.use('/react', login.check, firebase.testingData);
app.use('/react', firebase.testingData);

app.listen(port); //listens on port 3000 -> http://localhost:3000/
