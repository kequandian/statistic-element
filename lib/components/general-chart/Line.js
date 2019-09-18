'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _index2.default)({
  CHART: 'line',
  tooltip: {},
  series: {
    markLine: {
      data: [{ type: 'average', name: '平均值' }]
    }
  }
}, function (option) {
  console.log('Line EChart option:', option);
  return option;
}); /**
        * @author LLH
        * @editor
        * @updated 2018年10月10日
        * @desc  展示折线图
        * @eg
        <Line>
          title = ''
          Axis = []      类目录
          series = []    值目录
          levelDisplay = false   //水平展示还是垂直展示，默认垂直
          echart = {}    其他配置
        </Line>
     */