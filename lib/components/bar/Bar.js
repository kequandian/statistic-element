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
    * @author Yang,YN  2018-9-7
    * @editor
    * @updated
    * @desc  展示柱形图
    * @eg
    <Bar>
      title = ''
      Axis = []      类目录
      series = []    值目录
      levelDisplay = false   //水平展示还是垂直展示，默认垂直
      echart = {}    其他配置
    </Bar>
 */

var Bar = function (_React$Component) {
    (0, _inherits3.default)(Bar, _React$Component);

    function Bar(props) {
        (0, _classCallCheck3.default)(this, Bar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Bar.__proto__ || (0, _getPrototypeOf2.default)(Bar)).call(this, props));

        _this.state = {
            levelDisplay: props.levelDisplay || false
        };
        return _this;
    }

    (0, _createClass3.default)(Bar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            console.log("componentWillReceiveProps===", nextProps);
            this.setState({
                levelDisplay: nextProps.levelDisplay || false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                Axis = _props.Axis,
                series = _props.series,
                echart = _props.echart;
            var levelDisplay = this.state.levelDisplay;


            var newLegend = [];

            series && series.length > 0 && series.map(function (item, index) {
                series[index] = {
                    name: item.name || '',
                    type: 'bar',
                    data: item.data,
                    // barWidth: 30,
                    barMaxWidth: '60',
                    markPoint: {
                        data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }]
                    },
                    markLine: {
                        data: [{ type: 'average', name: '平均值' }]
                    }
                    //获取legend
                };newLegend.push(item.name);
            });

            //决定水平展示还是垂直展示
            var newXAxis = !levelDisplay ? [{
                type: 'category',
                data: Axis
            }] : [{
                type: 'value'
            }];

            var newxYxis = !levelDisplay ? [{
                type: 'value'
            }] : [{
                type: 'category',
                data: Axis
            }];

            var getOption = function getOption() {
                return {
                    // barMinHeight: 500,
                    title: {
                        text: title
                        // left: 'center'  //标题居中
                    },

                    legend: {
                        data: newLegend
                    },
                    grid: {
                        top: '25%'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    toolbox: { //展示保存为图片
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    Calulable: false,
                    xAxis: newXAxis,
                    yAxis: newxYxis,
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
    return Bar;
}(_react2.default.Component);

exports.default = Bar;