function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
/**
 * @param
 * defaultOption <Object> 默认配置
 * @param
 * [formatOption] <Function> 若需要对 option 进行很复杂的修改，可通过传入一个 format 函数来完成
 */

export default function GeneralChartWrapped(defaultOption, formatOption = false) {
  var _temp;

  return _temp = class GeneralChart extends Component {
    constructor(props) {
      super(props);

      _defineProperty(this, "formatSeries", (CHART, echartSeries) => {
        this.axis = [];
        this.seriesData = []; // series.data

        const {
          rates,
          axis,
          series
        } = this.props;

        if (series) {
          // 一个图表里面有多种数据
          this.legendList = [];
          this.axis = axis;
          this.seriesData = series.map(item => {
            this.legendList.push(item.name);
            return {
              type: CHART,
              ...echartSeries,
              ...item
            };
          });
        } else {
          // 一个图表里面只有一种数据
          if (Array.isArray(rates)) {
            const data = [];
            rates.forEach(item => {
              this.axis.push(item.name);
              data.push(item.value);
            });
            this.seriesData = [{
              name: '',
              data: data,
              type: CHART,
              ...echartSeries
            }];
          }
        }
      });

      this.state = {
        levelDisplay: props.levelDisplay || false
      };
      this.legendList = [];
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.state.levelDisplay !== nextProps.levelDisplay) {
        this.setState({
          levelDisplay: nextProps.levelDisplay || false
        });
      }
    }

    render() {
      const {
        title,
        echart = {}
      } = this.props;
      const {
        levelDisplay
      } = this.state;
      /* 调用时传入的配置 与 默认配置 */

      const {
        series: echartSeries = {},
        ...restEchart
      } = echart;
      const {
        CHART,
        title: defaultTitle,
        series: defaultSeries,
        legend: defaultLegend,
        ...restDefaultOptio
      } = defaultOption;
      this.formatSeries(CHART, { ...defaultSeries,
        ...echartSeries
      });
      let option = {
        title: {
          text: title,
          ...defaultTitle
        },
        series: this.seriesData,
        legend: {
          data: this.legendList,
          ...defaultLegend
        },
        xAxis: {
          data: this.axis
        },
        yAxis: {
          type: 'value'
        },
        ...restDefaultOptio,
        ...restEchart
      }; // console.log("option = ", option);

      if (levelDisplay === true) {
        option = { ...option,
          yAxis: { ...option.xAxis
          },
          xAxis: {
            type: 'value'
          }
        };
      }

      return /*#__PURE__*/React.createElement(ReactEcharts, {
        option: formatOption ? formatOption(option) : option
      });
    }

  }, _temp;
}