'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2; /**
                      * @author LLH
                      * @editor
                      * @updated 2018年10月23日
                      * @desc  展示一个主从的结构。最后一个子组件是 '主'，其它子组件是 '从'。
                      * @eg
                      <MS
                        master="left"
                      >
                        <Line />
                        <Pie />
                        <Pie />
                      </MS>
                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * 展示一个主从的结构。最后一个子组件是 '主'，其它子组件是 '从'。
 * @export
 * @class MS
 * @extends {Component}
 */
var MS = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(MS, _Component);

  function MS() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MS);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MS.__proto__ || (0, _getPrototypeOf2.default)(MS)).call.apply(_ref, [this].concat(args))), _this), _this.renderMaster = function (childList) {
      var Master = childList[childList.length - 1];
      return _react2.default.createElement(
        _antd.Col,
        { span: Master.props && Master.props.span || 1 },
        Master
      );
    }, _this.renderSlave = function (childList) {
      var Master = childList[childList.length - 1];

      return childList.length > 1 ? _react2.default.createElement(
        _antd.Col,
        { span: 24 - (Master.props && Master.props.span || 1) },
        childList.slice(0, -1)
      ) : null;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MS, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          master = _props.master,
          children = _props.children;

      var childList = _react2.default.Children.toArray(children);
      return _react2.default.createElement(
        _antd.Row,
        { type: 'flex', justify: 'space-around', align: 'middle' },
        master === 'left' ? _react2.default.createElement(
          _react.Fragment,
          null,
          this.renderMaster(childList),
          this.renderSlave(childList)
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          this.renderSlave(childList),
          this.renderMaster(childList)
        )
      );
    }
  }]);
  return MS;
}(_react.Component), _class.propsTypes = {
  master: _propTypes2.default.string
}, _class.defaultProps = {
  master: 'left'
}, _temp2);
exports.default = MS;