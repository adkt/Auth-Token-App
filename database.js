module.exports.init = function() {
  console.log("Starting Database");
  //Create Database
  var Datastore = require('nedb')
  var db = new Datastore({ filename: 'data.db', autoload: true });

  var databaseEntry = {user:'user2', pass:'test2'};

  /*
  db.insert(databaseEntry, function (err, newDoc) {
    if (!err) {
      console.log('insert worked');
    }
    else {
      console.log('insert failed ' + err);
    }
  });
*/
  
  db.find({ user: 'user2' }, function (err, docs) {
    console.log(docs);
    console.log('asd');
  });
};

