'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _index2.default)({
    CHART: 'pie',
    title: {
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left'
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
    series: {
        radius: '55%',
        center: ['50%', '60%']
    },
    calculable: true
}, function (option) {
    var xAxis = option.xAxis,
        yAxis = option.yAxis,
        restOption = (0, _objectWithoutProperties3.default)(option, ['xAxis', 'yAxis']);

    return (0, _extends3.default)({}, restOption, {
        legend: (0, _extends3.default)({}, restOption.legend, {
            data: restOption.series[0].data.map(function (item) {
                return item.name;
            })
        })
    });
}); /**
        * @author LLH
        * @editor
        * @updated 2018年10月10日
        * @desc  展示饼图
        * @eg
        <Pie>
          title = ''
          series = []    值目录
          echart = {}    其他配置
        </Pie>
     */