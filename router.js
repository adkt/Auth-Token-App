module.exports.init = function(app, db) {
  console.log("Starting Router");
  
  var auth = require("./auth/authInit");
  
  //require body-parser
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post('/login', function (request, response) {
    auth.init(db, request.body.user, request.body.pass).then(result => {
      console.log("promise: " + result);
    }).catch(err => {
      console.log("promise: " + err);
    });
  });
  
  
  // index page, on server startup we should register this route last.
  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/views/index.html");
  });
  
};