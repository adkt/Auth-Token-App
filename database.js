module.exports.init = function() {
  console.log("Starting Database");
  //Create Database
  var Datastore = require('nedb')
  var db = new Datastore({ filename: '.data/data.db', autoload: true });
  var databaseEntry = {user: "user1", pass: "password"};
  
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
  
  return db;
};

module.exports.find = async function(db, oTarget, oQuery) {
  return new Promise((resolve, reject) => {
    db.find(oTarget, oQuery, function (err, docs) {
      if(!err) {
        resolve(docs);
      } else {
        reject(err);
      }
    });  
  });
}