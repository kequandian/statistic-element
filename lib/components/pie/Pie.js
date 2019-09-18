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
    * @desc
    * @eg
    <Pie>
      title = ''
      series = []    值目录
      echart = {}    其他配置
    </Pie>
 */

var Pie = function (_React$Component) {
    (0, _inherits3.default)(Pie, _React$Component);

    function Pie(props) {
        (0, _classCallCheck3.default)(this, Pie);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Pie.__proto__ || (0, _getPrototypeOf2.default)(Pie)).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Pie, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                series = _props.series,
                echart = _props.echart;


            var newLegend = [];
            if (series && series.length > 0) {
                if (series[0].data && series[0].data.length > 0) {
                    series[0].data.map(function (item, index) {
                        newLegend.push(item.name);
                    });
                }
            }

            series && series.length > 0 && series.map(function (item, index) {
                series[index] = {
                    name: item.name || '',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: item.data || []
                    //获取legend
                };
            });

            console.log('kkkk newLegend = ', newLegend);

            var getOption = function getOption() {
                return {
                    title: {
                        text: title || '',
                        // subtext: '纯属虚构',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: newLegend
                    },

                    toolbox: {
                        show: true,
                        feature: {
                            mark: { show: true },
                            dataView: { show: true, readOnly: false },
                            magicType: {
                                show: true,
                                type: ['pie', 'funnel'],
                                option: {
                                    funnel: {
                                        x: '25%',
                                        width: '50%',
                                        funnelAlign: 'left',
                                        max: 1548
                                    }
                                }
                            },
                            restore: { show: true },
                            saveAsImage: { show: true }
                        }
                    },
                    calculable: true,
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
    return Pie;
}(_react2.default.Component);

exports.default = Pie;