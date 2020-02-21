var util = require("../utilities");
var keys = require("./keys");

module.exports.initKeys = async function() {
  var keysGenerated = await keys.makeKeys();
  return keysGenerated;
}

module.exports.initSession = async function(db, user) {
  var sessionID = await keys.makeSession();
  console.log(sessionID);
}