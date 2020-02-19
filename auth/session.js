var util = require("../utilities");
var curve = require("./curve25519");

module.exports.getSession = function(db, user) {
  var keys; 
  curve.generateKeys().then( result => {
    keys = result;
    console.log("Private: " + keys.privateKey);
    console.log("Public: " + keys.publicKey);
  });
}