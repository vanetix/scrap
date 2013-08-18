var Base = Scrap.Base = function() {
  this._bindings = [];
  this._views = [];
  this._intervals = [];

  Backbone.View.apply(this, arguments);
};

_.extend(Base.prototype, Backbone.View.prototype, {

  /**
   * Create a new `View` with options `options`
   * within the current view. `View` must extend `BaseView`.
   *
   * @param {BaseView} View
   * @param {Object} options
   */

  createChild: function(View, options) {
    var view = new View(options);
    this._views.push(view);
    return view;
  },

  /**
   * Create an interval and save the callback to
   * be cleared on view disposal.
   *
   * @param {Number} dx
   * @param {Function} callback
   */

  createInterval: function(dx, callback) {
    var interval = setInterval(callback, dx);
    this._intervals.push(interval);
    return interval;
  },

  /**
   * Bind handler `callback` to event `ev` on object
   * `item` and store the binding to unbinding on view disposal.
   *
   * @param {Backbone.Events} item
   * @param {String} ev
   * @param {Function} callback
   */

  bindTo: function(item, ev, callback, context) {
    this._bindings.push({
      item: item,
      ev: ev,
      callback: callback,
      context: context
    });

    return item.on(ev, callback, context);
  },

  /**
   * Pop off all events from `this.bindings` and call `off` on all,
   * removing the event bindings from each saved `item`.
   *
   * Then call `this.off` to remove all events that might not
   * have been bound with `this.bindTo`.
   */

  unbindAll: function() {
    var i, binding;

    for(i = this._bindings.length; i > 0; i = i - 1) {
      binding = this._bindings.pop();
      binding.item.off(binding.ev, binding.callback, binding.context);
    }

    this.off();
  },

  /**
   * Pop off all intervals from `this.intervals`
   * and clear each
   */

  clearIntervals: function() {
    var i, interval;

    for(i = this._intervals.length; i > 0; i = i - 1) {
      interval = this._intervals.pop();
      clearInterval(interval);
    }
  },

  /**
   * Clean up all children views
   * disposes of all child views of `this`
   */

  removeChildren: function() {
    var i, view;

    for(i = this._views.length; i > 0; i = i - 1) {
      view = this._views.pop();
      view.dispose();
    }
  },

  /**
   * Remove all children views, unbind events, remove any dangeling events,
   *  and remove the node from the `DOM`.
   *
   * @return {Null}
   */

  dispose: function () {
    this.removeChildren();
    this.unbindAll();
    this.clearIntervals();
    this.remove();

    return null;
  }
});

Base.extend = Backbone.View.extend;