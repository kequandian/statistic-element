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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberRows = function (_React$Component) {
  (0, _inherits3.default)(NumberRows, _React$Component);

  function NumberRows(props) {
    (0, _classCallCheck3.default)(this, NumberRows);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberRows.__proto__ || (0, _getPrototypeOf2.default)(NumberRows)).call(this, props));

    _this.showStyle = function (value) {
      return (0, _extends3.default)({
        marginBottom: '1em'
      }, _this.props.style, {
        height: _this.state.height / value
      });
    };

    _this.createList = function (children) {
      return children.length >= 0 && children && children.map(function (item, index) {
        return _react2.default.createElement(
          'div',
          { key: index, style: (0, _extends3.default)({ height: _this.state.height / children.length + 'px', marginBottom: '1em' }, _this.props.style) },
          item
        );
      });
    };

    _this.state = {
      height: props.style && props.style.height ? props.style.height : 400
    };
    return _this;
  }

  (0, _createClass3.default)(NumberRows, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      var style = (0, _extends3.default)({
        height: 400
      }, this.props.style);

      return _react2.default.createElement(
        'div',
        { style: style },
        this.createList(children),
        children != undefined && Array.isArray(children) == false ? _react2.default.createElement(
          'div',
          { style: style },
          children
        ) : null
      );
    }
  }]);
  return NumberRows;
}(_react2.default.Component); /**
                                  * @author Yang,YN  2018-9-11
                                  * @editor
                                  * @updated
                                  * @desc  简单实现了子组件占据本组件的高度，组件默认高度为400，子组件传入的数量决定了每个子组件的高度
                                  * @eg
                                  <NumberRows>
                                    children
                                  </NumberRows>
                               */

exports.default = NumberRows;