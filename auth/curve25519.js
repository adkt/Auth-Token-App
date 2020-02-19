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

