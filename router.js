module.exports.init = function(app) {
  console.log("Starting Router");
  
  //require body-parser
  var bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post('/login', function (req, res) {
    console.log(req.body);
    res.json(req.body);
  })
  
};