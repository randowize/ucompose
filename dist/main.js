'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ucompose = function ucompose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (fns.length <= 0) {
      return args.length <= 1 ? args[0] : args;
    }
    if (fns.length === 1) {
      var _fn = fns[0],
          _rest = fns.slice(1);

      if (_rest.length === 0) {
        switch (typeof _fn === 'undefined' ? 'undefined' : _typeof(_fn)) {
          case 'function':
            return _fn.apply(undefined, args);
          case 'object':
            {
              return Array.isArray(_fn) ? ucompose.apply(undefined, _toConsumableArray(_fn)).apply(undefined, args) : _fn;
            }
          default:
            return _fn;
        }
      }
      return ucompose.apply(undefined, _toConsumableArray(_rest))(ucompose(_fn).apply(undefined, args));
    }
    var fn = fns[0],
        rest = fns.slice(1);

    return ucompose.apply(undefined, _toConsumableArray(rest))(ucompose(fn).apply(undefined, args));
  };
};
