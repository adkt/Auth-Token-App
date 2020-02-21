var dayjs = require('dayjs')

module.exports.timestamp = function() {
  return 'LOG::' + dayjs().toISOString() + " ";
}

module.exports.test = function() {
  return "test working";
}