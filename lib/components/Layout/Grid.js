'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @author LLH
  * @editor
  * @updated 2018年10月23日
  * @desc  可配置的 Grid 布局
  * @eg
  const Grid_2 = Grid(2);
  <Grid_2>
    <child span={ 1 } />
    <child span={ 1 } />
  <Grid_2>
*/

exports.default = function (baseSpan) {
  return function (_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
      _antd.Row,
      { type: 'flex', justify: 'space-between', align: 'middle' },
      _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          _antd.Col,
          { sm: computeSpan(child.props && child.props.span, baseSpan) },
          child
        );
      })
    );
  };
};

function computeSpan() {
  var childSpan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var baseSpan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var rst = childSpan * (24 / baseSpan);
  return rst > 24 ? 24 : rst;
}