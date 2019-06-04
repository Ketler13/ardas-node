console.log(exports === module.exports)

module.exports = {
  a: 1,
  b: 2,
};
module.exports.a = 1;
exports.b = 2;
exports = {
  a: 1,
  b: 2,
};
