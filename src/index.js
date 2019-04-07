Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlainObject = function(object) {
  try {
    return [Object.prototype, null].indexOf(Object.getPrototypeOf(object)) > -1;
  } catch (e) {
    return false;
  }
};
