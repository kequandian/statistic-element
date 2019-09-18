'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewProgressRingDemo = function NewProgressRingDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var pieProps = {
    title: '6555666666',
    value: 0
  };

  return React.createElement(
    'div',
    null,
    React.createElement(_index.NewProgressRing, pieProps)
  );
};

exports.default = NewProgressRingDemo;