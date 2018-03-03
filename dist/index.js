'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _H = require('./H1');

Object.keys(_H).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _H[key];
    }
  });
});