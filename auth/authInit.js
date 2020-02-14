module.exports.init = function(db, user, pass) {
  
  // see if user and password match in db
  db.find({user: user, pass: pass}, function (err, docs) {
    if (docs.length == 1){
      console.log('password valid');
      return "Success";
    } else if (docs.length > 1){
      console.log('authInit #!!!ERROR 1: multiple usernames detected please investigate Authorisation database integrity');
      return "Database Error Please contact Admin quoting 'authInit ERROR 1'";
    } else if (err){
      console.log('authInit #!!!ERROR 2: database Error: ' + err)
      return "Database Error Please contact Admin quoting 'authInit ERROR 2'";
    } else {
      determineAuthError(user, pass);
    }
  });

  // When login fails determine the reason for the failure and return it
  function determineAuthError(){
    console.log('determining error');
    db.find({user: user}, function (err, docs) {
      // user found so must be a password error
      
    });
  }
};