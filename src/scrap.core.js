// AMD Wrapper
(function(module) {
  if(typeof define === 'function' && !!define.amd) {
    return define(['underscore', 'backbone'], module);
  }

  if(typeof require === "function" &&
    typeof module !== 'undefined' && !!module.exports) {
    var _ = require('underscore'),
        Backbone = require('backbone');

    return module.exports = module(Backbone);
  }

  return window.Scrap = module(window.Backbone);
})(function(_, Backbone) {
  var Scrap = {};

  // Scrap.Base
  include "scrap.base.js"

  return Scrap;
});