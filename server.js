// server.js
// where your node app starts

// import

// init project
const express = require("express");
const app = express();
var database = require("./database");
var router = require("./router");

// initialise database
var db = database.init();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// register routes
router.init(app, db);

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});


