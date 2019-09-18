'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

exports.default = GeneralChartWrapped;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param
 * defaultOption <Object> 默认配置
 * @param
 * [formatOption] <Function> 若需要对 option 进行很复杂的修改，可通过传入一个 format 函数来完成
 */
/**
    * @author LLH
    * @editor
    * @updated 2018年10月10日
    * @desc  对 Echart 进行标准化封装
    * @eg
    export default GeneralChartWrapped(
      {
        CHART: 'line',
        tooltip: {},
        series: {
          markLine : {
            data : [
                {type : 'average', name: '平均值'}
            ]
          },
        },
      },
      (option) => {
        console.log('Line EChart option:',option);
        return option;
      },
    );
 */

function GeneralChartWrapped(defaultOption) {
  var formatOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return function (_Component) {
    (0, _inherits3.default)(GeneralChart, _Component);

    function GeneralChart(props) {
      (0, _classCallCheck3.default)(this, GeneralChart);

      var _this = (0, _possibleConstructorReturn3.default)(this, (GeneralChart.__proto__ || (0, _getPrototypeOf2.default)(GeneralChart)).call(this, props));

      _this.formatSeries = function (CHART, echartSeries) {
        _this.axis = [];
        _this.seriesData = []; // series.data
        var _this$props = _this.props,
            rates = _this$props.rates,
            axis = _this$props.axis,
            series = _this$props.series;

        if (series) {
          // 一个图表里面有多种数据
          _this.legendList = [];
          _this.axis = axis;
          _this.seriesData = series.map(function (item) {
            _this.legendList.push(item.name);
            return (0, _extends3.default)({
              type: CHART
            }, item, echartSeries);
          });
        } else {
          // 一个图表里面只有一种数据
          if (Array.isArray(rates)) {
            var data = [];
            rates.forEach(function (item) {
              _this.axis.push(item.name);
              data.push(item.value);
            });
            _this.seriesData = [(0, _extends3.default)({
              name: '',
              data: data,
              type: CHART
            }, echartSeries)];
          }
        }
      };

      _this.state = {
        levelDisplay: props.levelDisplay || false
      };
      _this.legendList = [];
      return _this;
    }

    (0, _createClass3.default)(GeneralChart, [{
      key: 'UNSAFE_componentWillReceiveProps',
      value: function UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.state.levelDisplay !== nextProps.levelDisplay) {
          this.setState({
            levelDisplay: nextProps.levelDisplay || false
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            title = _props.title,
            _props$echart = _props.echart,
            echart = _props$echart === undefined ? {} : _props$echart;
        var levelDisplay = this.state.levelDisplay;

        /* 调用时传入的配置 与 默认配置 */

        var _echart$series = echart.series,
            echartSeries = _echart$series === undefined ? {} : _echart$series,
            restEchart = (0, _objectWithoutProperties3.default)(echart, ['series']);
        var CHART = defaultOption.CHART,
            defaultTitle = defaultOption.title,
            defaultSeries = defaultOption.series,
            defaultLegend = defaultOption.legend,
            restDefaultOptio = (0, _objectWithoutProperties3.default)(defaultOption, ['CHART', 'title', 'series', 'legend']);


        this.formatSeries(CHART, (0, _extends3.default)({}, defaultSeries, echartSeries));

        var option = (0, _extends3.default)({
          title: (0, _extends3.default)({
            text: title
          }, defaultTitle),
          series: this.seriesData,
          legend: (0, _extends3.default)({
            data: this.legendList
          }, defaultLegend),
          xAxis: {
            data: this.axis
          },
          yAxis: {
            type: 'value'
          }
        }, restDefaultOptio, restEchart);

        if (levelDisplay === true) {
          option = (0, _extends3.default)({}, option, {
            yAxis: (0, _extends3.default)({}, option.xAxis),
            xAxis: {
              type: 'value'
            }
          });
        }

        return _react2.default.createElement(_echartsForReact2.default, { option: formatOption ? formatOption(option) : option });
      }
    }]);
    return GeneralChart;
  }(_react.Component);
}