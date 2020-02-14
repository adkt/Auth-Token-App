module.exports.init = function(app, db) {
  console.log("Starting Router");
  
  var auth = require("./auth/authInit");
  
  //require body-parser
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post('/login', function (req, res) {
    auth.init(db, req.body.user, req.body.pass);
  })
  
};