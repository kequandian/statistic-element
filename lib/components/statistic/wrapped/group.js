'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (ChartComponent, count) {
  return function (props) {
    // 这里没有把 name 、title 传递下去
    var name = props.name,
        title = props.title,
        _props$rates = props.rates,
        rates = _props$rates === undefined ? [] : _props$rates,
        rest = (0, _objectWithoutProperties3.default)(props, ['name', 'title', 'rates']);

    var series = [];
    var axis = [];
    var nameList = name.split('|');
    for (var index = 0; index < count; index++) {
      series.push({
        name: nameList[index],
        // type: props.name,
        data: []
      });
    }
    rates.forEach(function (item, i) {
      if (i % count === 0) {
        axis.push(item.name);
      }
      series[i % count].data.push(item.value);
    });

    return _react2.default.createElement(ChartComponent, (0, _extends3.default)({}, rest, { axis: axis, series: series }));
  };
};