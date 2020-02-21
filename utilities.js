module.exports.timestamp = function() {
  return 'LOG::' + new Date().toLocaleDateString() + " " + new Date().toTimeString() + " ";
}

module.exports.test = function() {
  return "test working";
}