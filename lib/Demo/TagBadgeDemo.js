'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TagBadge = require('../components/tagBadge/TagBadge');

var _TagBadge2 = _interopRequireDefault(_TagBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagBadgeDemo = function TagBadgeDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var tagBadgeProps = {
    list: [{
      'tag': '读经随笔',
      'badge': 1024
    }, {
      'tag': '主日备忘',
      'badge': 70
    }, {
      'tag': '祷告默想',
      'badge': 80
    }]
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_TagBadge2.default, tagBadgeProps)
  );
};

exports.default = TagBadgeDemo;