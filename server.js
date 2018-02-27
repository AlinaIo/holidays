var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.APP_PORT || 3001;

//Routes
var router = express.Router();
router.get("/", function(req, res) {
  res.json({ message: "Welcome to our server" });
});


var routes = require("./routes/firebaseRoutes");
routes(app);

//start the server
app.listen(port);
console.log("Server started: " + port);
