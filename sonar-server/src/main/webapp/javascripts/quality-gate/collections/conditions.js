// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', '../models/condition'], function(Backbone, Condition) {
    var Conditions, _ref;
    return Conditions = (function(_super) {
      __extends(Conditions, _super);

      function Conditions() {
        _ref = Conditions.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Conditions.prototype.model = Condition;

      return Conditions;

    })(Backbone.Collection);
  });

}).call(this);

/*
//@ sourceMappingURL=conditions.map
*/
