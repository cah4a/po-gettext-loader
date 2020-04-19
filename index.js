var po = require('gettext-parser').po;

module.exports = function(source) {
  this.cacheable();
  return JSON.stringify(po.parse(source, 'utf-8'));
};