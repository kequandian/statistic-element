'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _Pie = require('../components/general-chart/Pie');

var _Pie2 = _interopRequireDefault(_Pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PieDemo = function PieDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var pieProps = {
    title: '某站点用户访问来源',
    series: [{
      name: '访问来源',
      data: [{ value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' }, { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' }, { value: 1548, name: '搜索引擎' }]
    }]
  };

  return React.createElement(
    'div',
    null,
    React.createElement(_Pie2.default, pieProps)
  );
};

exports.default = PieDemo;