'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ColumnTotal = require('../components/columnTotal/ColumnTotal');

var _ColumnTotal2 = _interopRequireDefault(_ColumnTotal);

var _LineGrid = require('../components/lineGrid/LineGrid');

var _LineGrid2 = _interopRequireDefault(_LineGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnTotalDemo = function ColumnTotalDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var props1 = {
    span: 1,
    name: '有效订单金额',
    value: '$6000',
    icon: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=893776491,1251327685&fm=58'
  };

  var props2 = {
    span: 1,
    name: '有效订单数',
    value: '$66',
    icon: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=893776491,1251327685&fm=58',
    nameStyle: {
      color: 'red',
      fontSize: '18px'
    },
    valueStyle: {
      color: 'blue'
    }
  };

  var props3 = {
    span: 1,
    name: '有效订单金额',
    value: '$6000'
  };

  var props4 = {
    span: 1,
    name: '有效订单数',
    value: '$66',
    icon: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=893776491,1251327685&fm=58'
  };

  return _react2.default.createElement(
    'div',
    { style: { backgroundColor: '#fff' } },
    _react2.default.createElement(
      _LineGrid2.default,
      null,
      _react2.default.createElement(_ColumnTotal2.default, props1),
      _react2.default.createElement(_ColumnTotal2.default, props2)
    )
  );
};

exports.default = ColumnTotalDemo;