/* const curry = f => {
  const arity = f.length;
  return (...args) => {
    if (args.length >= arity) return f(...args);
    return curry(f.bind(null, ...args));
  };
};
*/

/**
 * Function that takes functions parameters and returns their composition
 * @function
 * @name ucompose
 * @param {(string|number|boolean|Object|Array)} fns functions  to be composed
 * @returns {function} the composition of the functions
 */
const ucompose = (...fns) => (...args) => {
  if (fns.length <= 0) {
   // return args.length <= 1 ? args[0] : args;
    return (() => {})();
  }
  if (fns.length === 1) {
    const [fn] = fns;
    switch (typeof fn) {
      case 'function': return fn(...args);
      case 'object': {
        return Array.isArray(fn) ? ucompose(...fn)(...args) : fn;
      }
      default: return fn;
    }
  }
  const [fn, ...rest] = fns;
  return ucompose(...rest)(ucompose(fn)(...args));
};

module.exports = ucompose;
