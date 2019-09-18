'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _services = require('kqd-utils/lib/services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    * @author Yang,YN  2018-9-6
    * @editor
    * @updated
    * @desc
    * @eg
    <ColumnTotal>
      name = ''
      value = ''
      style = {},   //调整外层样式（长宽、背景等）
      nameStyle = {},   //修改name的样式
      valueStyle = {}   //修改value的样式
    </ColumnTotal>
 */

var ColumnTotal = function (_React$Component) {
  (0, _inherits3.default)(ColumnTotal, _React$Component);

  function ColumnTotal(props) {
    (0, _classCallCheck3.default)(this, ColumnTotal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColumnTotal.__proto__ || (0, _getPrototypeOf2.default)(ColumnTotal)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ColumnTotal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          icon = _props.icon;


      var style = (0, _extends3.default)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(242, 242, 242, 1)',
        height: '180px',
        margin: '1em',
        fontSize: '15px',
        color: '#333'
      }, this.props.style);

      var nameStyle = (0, _extends3.default)({
        marginBottom: '1em'
      }, this.props.nameStyle);

      var valueStyle = (0, _extends3.default)({
        textAlign: 'center'
      }, this.props.valueStyle);

      var iconStyle = (0, _extends3.default)({
        width: '35px',
        position: 'absolute',
        top: '2em',
        left: '2em'
      }, this.props.iconStyle);

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'div',
          null,
          icon ? _react2.default.createElement('img', { src: icon, style: iconStyle }) : null,
          _react2.default.createElement(
            'div',
            { style: nameStyle },
            name
          ),
          _react2.default.createElement(
            'div',
            { style: valueStyle },
            value
          )
        )
      );
    }
  }]);
  return ColumnTotal;
}(_react2.default.Component);

exports.default = ColumnTotal;