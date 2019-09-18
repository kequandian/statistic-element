'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _ProgressRing = require('../components/progressRing/ProgressRing');

var _ProgressRing2 = _interopRequireDefault(_ProgressRing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressRingDemo = function ProgressRingDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var progressRingProps1 = {
    percent: 35,
    title: '综合得分',
    subTitle: '78分',
    color: 'red'
  };

  var progressRingProps2 = {
    percent: 89,
    title: '肌肤年龄',
    subTitle: '16岁',
    color: 'blue'
  };

  return React.createElement(
    'div',
    null,
    React.createElement(_ProgressRing2.default, progressRingProps1),
    React.createElement(_ProgressRing2.default, progressRingProps2)
  );
};

exports.default = ProgressRingDemo;