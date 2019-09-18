'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatisticTable = function StatisticTable(_ref) {
  var rates = _ref.rates,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['rates']);

  var tableProps = {
    dataSource: rates
  };
  return _react2.default.createElement(_antd.Table, tableProps);
};

exports.default = StatisticTable;