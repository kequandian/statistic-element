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

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc    雷达图组件
    * @eg
    <Radar>
      indicator:[]     // 雷达图的指示器，用来指定雷达图中的多个变量（维度）,跟data中 value 对应
      areaBackgroundColor = []     //指每个圈的背景颜色
      dataList =  [], //数据值
      aroundBackColor =  '#fadebb'    //包围区域的颜色
    </Radar>
 */

var Radar = function (_React$Component) {
    (0, _inherits3.default)(Radar, _React$Component);

    function Radar(props) {
        (0, _classCallCheck3.default)(this, Radar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Radar.__proto__ || (0, _getPrototypeOf2.default)(Radar)).call(this, props));

        _this.state = {
            backgroundColor: props.backgroundColor || '', //设置背景
            splitNumber: props.splitNumber || 3, //默认雷达图的圈数为3
            indicator: props.indicator || [],
            areaBackgroundColor: props.areaBackgroundColor || ['#f5c8b4', '#e2ae97', '#cd937a'],
            dataList: props.dataList || [],
            aroundBackColor: props.aroundBackColor || '#fadebb'
        };
        return _this;
    }

    (0, _createClass3.default)(Radar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                backgroundColor: nextProps.backgroundColor || '', //设置背景
                splitNumber: nextProps.splitNumber || 3, //默认雷达图的圈数为3
                indicator: nextProps.indicator || [],
                areaBackgroundColor: nextProps.areaBackgroundColor || ['#f5c8b4', '#e2ae97', '#cd937a'],
                dataList: nextProps.dataList || [],
                aroundBackColor: nextProps.aroundBackColor || '#fadebb'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                backgroundColor = _state.backgroundColor,
                splitNumber = _state.splitNumber,
                indicator = _state.indicator,
                areaBackgroundColor = _state.areaBackgroundColor,
                dataList = _state.dataList,
                aroundBackColor = _state.aroundBackColor;


            var getOption = function getOption() {
                return {
                    backgroundColor: backgroundColor, //设置背景色
                    title: {
                        // text: title
                    },
                    legend: {
                        show: true,
                        orient: 'vertical', // 图例列表的布局朝向,'horizontal'为横向,''为纵向.
                        top: '40%', // 图例距离顶部边距
                        left: '15%',
                        data: ['预防护理', '持续护理', '集中护理']
                    },
                    radar: {
                        // shape: 'circle',
                        splitNumber: splitNumber, // 雷达图圈数设置
                        name: {
                            textStyle: (0, _extends3.default)({
                                color: '#000',
                                fontSize: '13px',
                                borderRadius: 3,
                                padding: [3, 5]
                            }, _this2.props.textStyle)
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fdecd5' // 设置雷达图中间射线的颜色
                            }
                        },
                        indicator: indicator,
                        splitArea: {
                            show: true,
                            areaStyle: { color: areaBackgroundColor //设置圈的背景颜色
                            } },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                width: 1,
                                color: 'blue' // 设置网格的颜色
                            }
                        }
                    },
                    series: [{
                        // name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        data: [{
                            value: dataList
                        }],
                        itemStyle: {
                            normal: {
                                color: 'rgba(255,225,0,.3)',
                                backgroundColor: 'blue',
                                lineStyle: {
                                    color: 'rgba(255,225,0,.3)' //线条的颜色
                                }
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: aroundBackColor //包围区域的颜色
                            }
                        }
                    }]
                };
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_echartsForReact2.default, { option: getOption() })
            );
        }
    }]);
    return Radar;
}(_react2.default.Component);

exports.default = Radar;