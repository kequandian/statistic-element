'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _LineGrid = require('../components/lineGrid/LineGrid');

var _LineGrid2 = _interopRequireDefault(_LineGrid);

var _ColumnChain = require('../components/columnChain/ColumnChain');

var _ColumnChain2 = _interopRequireDefault(_ColumnChain);

var _Pie = require('../components/pie/Pie');

var _Pie2 = _interopRequireDefault(_Pie);

var _Bar = require('../components/bar/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridDemo = function GridDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var columnStatisticProps1 = {
    span: 1,
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down'
  };

  var columnStatisticProps2 = {
    span: 1,
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down'
  };
  var pieProps = {
    span: 3,
    title: '某站点用户访问来源',
    legend: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    series: [{
      name: '访问来源',
      data: [{ value: 335, name: '直接访问' }, { value: 310, name: '邮件营销' }, { value: 234, name: '联盟广告' }, { value: 135, name: '视频广告' }, { value: 1548, name: '搜索引擎' }]
    }]
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      _LineGrid2.default,
      null,
      React.createElement(_Pie2.default, pieProps),
      React.createElement(_ColumnChain2.default, columnStatisticProps1)
    )
  );
};

exports.default = GridDemo;