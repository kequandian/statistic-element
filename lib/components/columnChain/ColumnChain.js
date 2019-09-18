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

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    * @author Yang,YN  2018-9-6
    * @editor LLH
    * @updated 2018年10月9日
    * @desc
    * @eg
    <ColumnChain>
      title = ''       //标题
      subTitle =''     //副标题
      value =''        //值
      note = ''        //备注
      iconType = ''    //图标箭头类型，默认是向上
    </ColumnChain>
 */

var ColumnChain = function (_React$Component) {
  (0, _inherits3.default)(ColumnChain, _React$Component);

  function ColumnChain(props) {
    (0, _classCallCheck3.default)(this, ColumnChain);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ColumnChain.__proto__ || (0, _getPrototypeOf2.default)(ColumnChain)).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ColumnChain, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          subTitle = _props.subTitle,
          value = _props.value,
          note = _props.note,
          iconType = _props.iconType;


      var style = (0, _extends3.default)({
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: '1em',
        width: '200px'
      }, this.props.style);

      var titleStyle = (0, _extends3.default)({
        color: '#000'
      }, this.props.titleStyle);

      var valueStyle = (0, _extends3.default)({
        color: '#0084FF',
        fontSize: '20px',
        padding: '0.2em 0'
      }, this.props.valueStyle);

      var subTitleStyle = (0, _extends3.default)({
        padding: '0.2em 0'
      }, this.props.subTitleStyle);

      var noteStyle = (0, _extends3.default)({
        padding: '0.2em 0'
      }, this.props.noteStyle);

      var iconStyle = (0, _extends3.default)({
        marginLeft: '0.5em',
        color: iconType && iconType == 'up' ? 'red' : 'green'
      }, this.props.iconStyle);

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'div',
          { style: titleStyle },
          title
        ),
        _react2.default.createElement(
          'div',
          { style: valueStyle },
          value
        ),
        subTitle ? _react2.default.createElement(
          'div',
          { style: subTitleStyle },
          '\u6628\u65E5\uFF1A',
          subTitle
        ) : null,
        note ? _react2.default.createElement(
          'div',
          { style: noteStyle },
          '\u4E0B\u964D\uFF1A',
          note,
          _react2.default.createElement(_antd.Icon, { type: iconType && iconType == 'up' ? 'arrow-up' : 'arrow-down', style: iconStyle })
        ) : null
      );
    }
  }]);
  return ColumnChain;
}(_react2.default.Component);

exports.default = ColumnChain;