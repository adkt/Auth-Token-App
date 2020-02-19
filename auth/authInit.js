var util = require("../utilities");

module.exports.init = function(db, user, pass) {
  return new Promise((resolve, reject) => {  
    // see if user and password match in db
    db.find({user: user, pass: pass}, function (err, docs) {
     if (docs.length == 1) {
        console.log(util.timestamp() + 'username and password valid');
        resolve("Success");
      } else if (err) {
        console.log(util.timestamp() + 'auth/authInit/init ERROR 1: database Error: ' + err)
        reject("Database Error Please contact Admin quoting 'auth/authInit/init ERROR 1'");
      } else {
        determineAuthError(user, pass).then(result => {
          reject(result);
        });
      }
    });
  });

  // When login fails determine the reason for the failure and return it
  function determineAuthError(){
    return new Promise((resolve, reject) => {
      //determining error
      db.find({user: user}, function (err, docs) {
        if (docs.length == 1) {
          // user found so must be a password error
            console.log(util.timestamp() + 'auth/authInit/determineAuthError ERROR 2: password Error.')
            resolve("Incorrect Password");
        } else if (docs.length > 1) {
          // multiple users with same username
          console.log(util.timestamp() + 'auth/authInit/determineAuthError ERROR 3: multiusername in Database.')
          resolve("Database Error Please contact Admin quoting 'auth/authInit/determineAuthError ERROR 3'");
        } else {
          // user not found so is a username error
          console.log(util.timestamp() + 'auth/authInit/determineAuthError ERROR 4: username not found.')
          resolve("Incorrect Username");
        }
      });
    });
  }
  
}