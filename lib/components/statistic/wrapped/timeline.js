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

var _kqdLayoutFlex = require('kqd-layout-flex');

var _kqdListItemElement = require('kqd-list-item-element');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FlexItem = _kqdLayoutFlex.FlexLayout.FlexItem;
// import moment from 'moment';

var OptionItem = function OptionItem(_ref) {
  var data = _ref.data,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;
  return _react2.default.createElement(
    'span',
    { className: 'Statistic-timeline-optionItem' + className },
    data.name
  );
};

exports.default = function (ChartComponent, config) {
  return function (_Component) {
    (0, _inherits3.default)(TimelineWrapped, _Component);

    function TimelineWrapped(props) {
      (0, _classCallCheck3.default)(this, TimelineWrapped);

      var _this = (0, _possibleConstructorReturn3.default)(this, (TimelineWrapped.__proto__ || (0, _getPrototypeOf2.default)(TimelineWrapped)).call(this, props));

      _this.state = {
        type: 0
      };
      return _this;
    }

    (0, _createClass3.default)(TimelineWrapped, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            name = _props.name,
            _props$timeline = _props.timeline,
            timeline = _props$timeline === undefined ? [] : _props$timeline;
        var type = this.state.type;

        var optionList = timeline.map(function (item, i) {
          return { name: item.name, index: i };
        });

        var chartProps = {
          title: '' + (optionList[type] && optionList[type].name || '') + name,
          rates: timeline[type] && timeline[type].rates || []
        };
        return _react2.default.createElement(
          _kqdLayoutFlex.FlexLayout,
          null,
          _react2.default.createElement(
            FlexItem,
            { flex: 1 },
            _react2.default.createElement(
              'div',
              { className: 'Statistic-timeline-option' },
              _react2.default.createElement(
                _kqdListItemElement.ListItem,
                {
                  data: optionList,
                  value: type,
                  valueField: 'index'
                  // activeClass={ styles.active }
                  , onClick: function onClick(i, data) {
                    _this2.setState({
                      type: data.index
                    });
                  }
                },
                _react2.default.createElement(OptionItem, null)
              )
            ),
            _react2.default.createElement(ChartComponent, (0, _extends3.default)({}, chartProps, config))
          )
        );
      }
    }]);
    return TimelineWrapped;
  }(_react.Component);
};

// function getDay(){
//   const nowHour = moment().hour();
//   const rst = [];
//   for (let i = 0; i < nowHour; i++) {
//     rst.unshift( moment().hour( nowHour - i ).minute(0).format('HH:mm') );
//   }
//   return rst;
// }
// function getWeek(){
//   const weekMap = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
//   const nowWeek = moment().isoWeekday() - 1;
//   const rst = [];
//   for (let i = 0; i < 7; i++) {
//     let temp = nowWeek - i;
//     if(temp < 0){
//       temp += 7;
//     }
//     rst.unshift( `${moment().dayOfYear( moment().dayOfYear()- i ).format('MM-DD')} ${weekMap[ temp ]}` );
//   }
//   return rst;
// }
// function getMonth(){
//   const nowDay = moment().date();
//   const rst = [];
//   for (let i = 0; i < nowDay; i++) {
//     rst.unshift( moment().date( nowDay - i ).format('MM-DD') );
//   }
//   return rst;
// }