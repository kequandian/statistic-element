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

exports.default = StatisticWrapped;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../Layout');

var LayoutSet = _interopRequireWildcard(_Layout);

require('./index.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function StatisticWrapped(chartMap) {
  return function (_Component) {
    (0, _inherits3.default)(Statistic, _Component);

    function Statistic() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Statistic);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Statistic.__proto__ || (0, _getPrototypeOf2.default)(Statistic)).call.apply(_ref, [this].concat(args))), _this), _this.renderChart = function (item, index) {
        var chartType = item.chart;
        // if(item.timeline){
        //   if(chartType.indexOf('_timeline') === -1){
        //     chartType += '_timeline';
        //   }
        // }
        if (chartMap[chartType] === undefined) {
          return '\u672A\u5B9A\u4E49\u7684 Chart \u7C7B\u578B\uFF1A' + chartType;
        }

        return _react2.default.createElement(chartMap[chartType], (0, _extends3.default)({}, item, {
          key: index
        }));
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Statistic, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            layout = _props.layout,
            title = _props.title,
            _props$items = _props.items,
            items = _props$items === undefined ? [] : _props$items;

        if (!(items instanceof Array)) {
          console.error('items must is a Array');
          return null;
        }
        // 过滤有效的 item
        var itemsFilter = items.filter(function (item) {
          return item.chart;
        });

        var layoutMap = (0, _extends3.default)({}, LayoutSet);
        var Layout = layoutMap[layout] || layoutMap['Grid_1'];

        return _react2.default.createElement(
          'div',
          { className: 'Statistic-row' },
          _react2.default.createElement(
            'div',
            { className: 'Statistic-row-title' },
            title
          ),
          _react2.default.createElement(
            Layout,
            null,
            itemsFilter.map(function (item, index) {
              return _this2.renderChart(item, index);
            })
          )
        );
      }
    }]);
    return Statistic;
  }(_react.Component);
} /**
      * @author Yang,YN  2018-9-11
      * @editor LLH[*重构]
      * @updated 2018年10月10日
      * @desc  根据 config，渲染不同的 chart
      * @eg
      <Statistic {{
        layout: '',
        items: [],
      }}/>
   */