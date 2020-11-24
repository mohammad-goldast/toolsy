'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Object = require('./Object.js');

Object.keys(_Object).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Object[key];
    }
  });
});

var _Array = require('./Array.js');

Object.keys(_Array).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Array[key];
    }
  });
});

var _Number = require('./Number.js');

Object.keys(_Number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Number[key];
    }
  });
});