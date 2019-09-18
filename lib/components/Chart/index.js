'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp, _initialiseProps; /**
                                       * @author LLH
                                       * @editor
                                       * @updated 2018年10月25日
                                       * @desc  传入 group ，渲染一整页 chart
                                       * @eg
                                       <Chart group="stat:order" />
                                     */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _services = require('kqd-utils/lib/services');

var _antd = require('antd');

var _statistic = require('../statistic');

var _statistic2 = _interopRequireDefault(_statistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chart = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Chart, _Component);

  function Chart(props) {
    (0, _classCallCheck3.default)(this, Chart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Chart.__proto__ || (0, _getPrototypeOf2.default)(Chart)).call(this, props));

    _initialiseProps.call(_this);

    var group = props.group,
        identifier = props.identifier;

    _this.state = {
      errorMsg: '',
      loading: false,
      data: {},
      update: false,

      group: group,
      identifier: identifier
    };
    if (group === undefined) {
      var _ret;

      console.error('props: group 是必须的');
      _this.state.errorMsg = 'props: group 是必须的';
      return _ret = false, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    return _this;
  }

  (0, _createClass3.default)(Chart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.queryData();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevState.update && this.state.update) {
        this.queryData();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          errorMsg = _state.errorMsg,
          loading = _state.loading,
          data = _state.data;
      var layout = data.layout,
          _data$items = data.items,
          items = _data$items === undefined ? [] : _data$items;

      var classNameMap = {
        'Compact': 'Statistic-compact'
      };
      return _react2.default.createElement(
        _antd.Spin,
        { spinning: loading },
        _react2.default.createElement(
          'h3',
          { style: { color: 'red' } },
          errorMsg
        ),
        _react2.default.createElement(
          'div',
          { className: classNameMap[layout] },
          items && items.map(function (item, i) {
            return _react2.default.createElement(_statistic2.default, (0, _extends3.default)({}, item, { key: i }));
          })
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.group !== prevState.group || nextProps.identifier !== prevState.identifier) {
        return {
          group: nextProps.group,
          identifier: nextProps.identifier,
          update: true
        };
      }
      return null;
    }
  }]);
  return Chart;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.queryData = function () {
    var _state2 = _this2.state,
        group = _state2.group,
        identifier = _state2.identifier;

    if (group === undefined) {
      _this2.setState({
        errorMsg: 'props: group 是必须的'
      });
      return false;
    }
    _this2.setState({
      loading: true
    });

    (0, _services.query)('/api/stat/groups/' + group, {
      identifier: identifier
    }).then(function (_ref) {
      var code = _ref.code,
          data = _ref.data,
          message = _ref.message;

      if (code === 200) {
        _this2.setState({
          data: data,
          errorMsg: '',
          loading: false,
          update: false
        });
      } else {
        _this2.setState({
          errorMsg: message,
          loading: false,
          update: false
        });

        return false;
      }
    });
  };
}, _temp);
exports.default = Chart;