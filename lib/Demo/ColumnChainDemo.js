'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _ColumnChain = require('../components/columnChain/ColumnChain');

var _ColumnChain2 = _interopRequireDefault(_ColumnChain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnChainDemo = function ColumnChainDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var ColumnChainProps = {
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down'
  };

  var columnStatisticProps1 = {
    title: '今日销单数',
    subTitle: '昨日：*16545000',
    value: '*152333000',
    note: '上升 3%',
    iconType: 'up'
  };
  var notSubTitle = {
    title: '没有副标题',
    value: 'value 123',
    note: '上升 3%',
    iconType: 'up'
  };

  return React.createElement(
    'div',
    { style: { display: 'flex' } },
    React.createElement(_ColumnChain2.default, ColumnChainProps)
  );
};

exports.default = ColumnChainDemo;