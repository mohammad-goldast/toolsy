'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Object = require('./utils/Object.js');

Object.defineProperty(exports, 'object', {
  enumerable: true,
  get: function get() {
    return _Object.object;
  }
});

var _Array = require('./utils/Array.js');

Object.keys(_Array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Array[key];
    }
  });
});

var _Number = require('./utils/Number.js');

Object.keys(_Number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Number[key];
    }
  });
});