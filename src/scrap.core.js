(function() {
  var _, root, Scrap, Backbone;

  // Retain context
  root = this;

  // Underscore and Backbone dependencies
  _ = root._;
  Backbone = root.Backbone;

  // Default Scrap object
  Scrap = root.Scrap = {};

  // Scrap.Base
  include "scrap.base.js"

}).call(this);