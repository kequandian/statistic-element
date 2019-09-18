'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Charts = require('ant-design-pro/lib/Charts');

require('ant-design-pro/dist/ant-design-pro.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressRing = function (_React$Component) {
  (0, _inherits3.default)(ProgressRing, _React$Component);

  function ProgressRing(props) {
    (0, _classCallCheck3.default)(this, ProgressRing);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProgressRing.__proto__ || (0, _getPrototypeOf2.default)(ProgressRing)).call(this, props));

    _this.state = {
      percent: props.percent || 0,
      title: props.title || '',
      subTitle: props.subTitle || '',
      height: props.height || 140,
      color: props.color || 'rgba(24, 144, 255, 0.85)'
    };
    return _this;
  }

  (0, _createClass3.default)(ProgressRing, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          percent = _state.percent,
          title = _state.title,
          subTitle = _state.subTitle,
          height = _state.height,
          color = _state.color;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Charts.Pie, {
          percent: percent,
          subTitle: title,
          total: subTitle,
          height: height,
          color: color
        })
      );
    }
  }]);
  return ProgressRing;
}(_react2.default.Component); /**
                                  * @author Yang,YN
                                  * @editor
                                  * @updated
                                  * @desc   进度图标组件
                                  * @eg
                                  <ProgressRing>
                                    percent = 0     //占的百分比
                                    title = ''    //名称等
                                    total = ''
                                    height = 140    //进度条高度，默认140px
                                    color = 'rgba(24, 144, 255, 0.85)'  //进度条的颜色值
                                  </ProgressRing>
                               */

exports.default = ProgressRing;