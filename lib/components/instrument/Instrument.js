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

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc   仪表图组件
    * @eg
    <Instrument>
      name = '',  name代表标题，
      value = 0 , value表示值
      titleType = ''  值后面的单位
    </Instrument>
 */

var Instrument = function (_React$Component) {
  (0, _inherits3.default)(Instrument, _React$Component);

  function Instrument(props) {
    (0, _classCallCheck3.default)(this, Instrument);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Instrument.__proto__ || (0, _getPrototypeOf2.default)(Instrument)).call(this, props));

    _this.state = {
      name: props.name || '',
      value: props.value || 0,
      titleType: props.titleType || ''
    };
    return _this;
  }

  (0, _createClass3.default)(Instrument, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          name = _state.name,
          value = _state.value,
          titleType = _state.titleType;


      var series = [{
        name: name,
        type: 'gauge',
        detail: { formatter: "{value}" + ('' + titleType) },
        data: [{
          value: value,
          name: name
        }]
      }];

      var getOption = function getOption() {
        return {
          // tooltip : {
          //     formatter: "{a} <br/>{b} : {c}%"
          // },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true },
              restore: { show: false }
            }
          },
          series: series
        };
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_echartsForReact2.default, { option: getOption() })
      );
    }
  }]);
  return Instrument;
}(_react2.default.Component);

exports.default = Instrument;