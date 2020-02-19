module.exports.init = function(app, db) {
  console.log("Starting Router");
  
  var auth = require("./auth/authInit");
  var session = require("./auth/session.js");
  
  //require body-parser
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post('/login', function (request, response) {
    auth.init(db, request.body.user, request.body.pass).then(result => {
      // Login was successful now generate Session
      session.getSession(db, request.body.user);
      response.send("Result: " + result);
    }).catch(error => {
      response.send("Result: " + error);
    });
  });
  
  
  // index page, on server startup we should register this route last.
  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/index.html");
  });
  
};