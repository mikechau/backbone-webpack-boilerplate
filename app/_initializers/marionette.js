/*eslint-disable*/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['backbone.marionette', 'backbone.radio', 'underscore', 'mustache'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('backbone.marionette'), require('backbone.radio'), require('underscore'), require('mustache'));
  } else {
    factory(root.Backbone.Marionette, root.Backbone.Radio, root._);
  }
}(this, function(Marionette, Radio, _, Mustache) {
  'use strict';

  // Enable Marionette inspector
  window.Marionette = Marionette;

  Marionette.Application.prototype._initChannel = function () {
    this.channelName = _.result(this, 'channelName') || 'global';
    this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
  }

  Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {

      // Mustache.parse will not return anything useful (returns an array)
      // The render function from Marionette.Renderer.render expects a function
      // so instead pass a partial of Mustache.render
      // with rawTemplate as the initial parameter.

      // Additionally Mustache.compile no longer exists so we must use parse.
      Mustache.parse(rawTemplate);
      return _.partial(Mustache.render, rawTemplate);
  };
}));
