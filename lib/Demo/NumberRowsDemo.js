'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _NumberRows = require('../components/numberRows/NumberRows');

var _NumberRows2 = _interopRequireDefault(_NumberRows);

var _ColumnChain = require('../components/columnChain/ColumnChain');

var _ColumnChain2 = _interopRequireDefault(_ColumnChain);

var _LineGrid = require('../components/lineGrid/LineGrid');

var _LineGrid2 = _interopRequireDefault(_LineGrid);

var _Pie = require('../components/pie/Pie');

var _Pie2 = _interopRequireDefault(_Pie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberRowsDemo = function NumberRowsDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var columnStatisticProps1 = {
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down'
  };

  var columnStatisticProps2 = {
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

  var numberRowsProps = {
    style: {
      // background: '#fff'
    }
  };

  return React.createElement(
    _LineGrid2.default,
    null,
    React.createElement(
      _NumberRows2.default,
      (0, _extends3.default)({ span: 3 }, numberRowsProps),
      React.createElement(_Pie2.default, pieProps)
    ),
    React.createElement(
      _NumberRows2.default,
      (0, _extends3.default)({ span: 1 }, numberRowsProps),
      React.createElement(_ColumnChain2.default, columnStatisticProps1),
      React.createElement(_ColumnChain2.default, columnStatisticProps2)
    )
  );
};

exports.default = NumberRowsDemo;