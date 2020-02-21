var util = require("../utilities");

const { SodiumPlus } = require('sodium-plus');

module.exports.generateKeys = function() {
  return new Promise(resolve => {
    var sodium;
    var keys = generateKeys();
    return keys;

    async function generateKeys() {
      if (!sodium) sodium = await SodiumPlus.auto();  

      console.log(util.timestamp() + sodium.getBackendName() + ' loaded and in use.');

      var keypair = await sodium.crypto_box_keypair();
      var secretKey = await sodium.crypto_box_secretkey(keypair);
      var publicKey = await sodium.crypto_box_publickey(keypair);  

      var keys = {
        privateKey: await sodium.sodium_bin2hex(secretKey.getBuffer()),
        publicKey: await sodium.sodium_bin2hex(publicKey.getBuffer())
      }

      resolve(keys);
    }
  });
}

module.exports.generateBuffer = function(size) {
  return new Promise(resolve => {
    var sodium;
    resolve(generateRandomHex(size));
    async function generateRandomHex(bufferSize) {
      if (!sodium) sodium = await SodiumPlus.auto();
      var buffer = await sodium.randombytes_buf(bufferSize);
      return buffer.toString('hex');
    }
  })
}

// generates Interger from 0 to (max-1)
module.exports.generateInt = function(max) {
  return new Promise(resolve => {
    var sodium;
    resolve(generateRandomInt(max));
    async function generateRandomInt(maxInteger) {
      if (!sodium) sodium = await SodiumPlus.auto();
      return await sodium.randombytes_uniform(maxInteger);
    }
  })
}

