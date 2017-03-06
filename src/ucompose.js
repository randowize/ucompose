const ucompose = (...fns) => (...args) => {
  if (fns.length <= 0) {
   // return args.length <= 1 ? args[0] : args;
    return (() => {})(...args);
  }
  if (fns.length === 1) {
    const [fn, ...rest] = fns;
    if (rest.length === 0) {
      switch (typeof fn) {
        case 'function': return fn(...args);
        case 'object': {
          return Array.isArray(fn) ? ucompose(...fn)(...args) : fn;
        }
        default: return fn;
      }
    }
    return ucompose(...rest)(ucompose(fn)(...args));
  }
  const [fn, ...rest] = fns;
  return ucompose(...rest)(ucompose(fn)(...args));
};

export default ucompose;
