var util = require("../utilities");
var database = require("../database");

module.exports.init = async function(db, user, pass) {
  // see if user and password match in db
  var result;
  try {
    result = await database.find(db, {user: user, pass: pass});
  } catch (error) {
    console.log(util.timestamp() + 'auth/authInit/init ERROR 1: database Error: ' + error)
    return "Database Error Please contact Admin quoting 'auth/authInit/init ERROR 1'";
  }
  
  if (result.length == 1) {
    console.log(util.timestamp() + 'username and password valid');
    return "Success";
  } else {
    try {
      result = await determineAuthError();
      return result;
    } catch (error) {
      console.log(util.timestamp() + 'auth/authInit/init ERROR 1: database Error: ' + error)
      return "Database Error Please contact Admin quoting 'auth/authInit/init ERROR 1'";
    }
  }

  // When login fails determine the reason for the failure and return it
  async function determineAuthError() {
    //determining error
    var reasonResult = await database.find(db, {user: user});
    if (reasonResult.length == 1) {
      // user found so must be a password error
      console.log(util.timestamp() + 'auth/authInit/determineAuthError ERROR 2: password Error.')
      return "Incorrect Password";
    } else if (reasonResult.length > 1) {
      // multiple users with same username
      console.log(util.timestamp() + 'auth/authInit/determineAuthError ERROR 3: multiusername in Database.')
      return "Database Error Please contact Admin quoting 'auth/authInit/determineAuthError ERROR 3'";
    } else {
      // user not found so is a username error
      console.log(util.timestamp() + 'auth/authInit/determineAuthError ERROR 4: username not found.')
      return "Incorrect Username";
    }
  }
  
}