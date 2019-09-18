'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _Radar = require('../components/radar/Radar');

var _Radar2 = _interopRequireDefault(_Radar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadarDemo = function RadarDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var radarProps = {
    indicator: [{ name: '敏感区', max: 6500 }, { name: '表素', max: 6000 }, { name: '皱纹', max: 7000 }, { name: '毛孔', max: 8000 }, { name: '深斑', max: 9000 }, { name: '粉刺', max: 10000 }],
    areaBackgroundColor: ['#f5c8b4', '#e2ae97', '#cd937a'],
    dataList: [4300, 1000, 2800, 3500, 5000, 1900],
    aroundBackColor: '#fadebb'
  };

  return React.createElement(
    'div',
    null,
    React.createElement(_Radar2.default, radarProps)
  );
};

exports.default = RadarDemo;