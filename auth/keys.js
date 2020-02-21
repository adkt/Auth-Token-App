var curve = require("./curve25519");

module.exports.makeKeys = function() {
  return new Promise(resolve => {
    var keys; 
    curve.generateKeys().then( result => {
      keys = result;
      resolve(keys);
    });
  });
}

module.exports.makeSession = function() {
  return new Promise(resolve => {
    curve.generateBuffer(32).then( result => {
      resolve(result);
    });
  });
}