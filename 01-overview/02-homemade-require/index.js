const fs = require("fs");

function loadModule(filename, module, require) {
  const wrappedSrc = `(function(module, exports, require) {
      ${fs.readFileSync(filename, "utf8")}
    })(module, module.exports, require);`;
  eval(wrappedSrc);
}

function _require(moduleName) {
  console.log("Require invoked for module: " + moduleName);
  const id = _require.resolve(moduleName);
  if (_require.cache[id]) {
    return _require.cache[id].exports;
  }
  const module = {
    exports: {},
    id: id
  };
  _require.cache[id] = module;
  loadModule(id, module, _require);
  return module.exports;
}

_require.cache = {};
_require.resolve = function(moduleName) {
  return moduleName;
};

const revealingModule = _require("./requiredModule.js");
console.log(revealingModule);
