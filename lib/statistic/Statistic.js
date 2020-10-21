function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
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
import React, { Component } from 'react';
import * as LayoutSet from "../components/Layout";
import "./index.css";
export default function StatisticWrapped(chartMap) {
  var _temp;

  return _temp = class Statistic extends Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "renderChart", (item, index) => {
        const chartType = item.chart; // if(item.timeline){
        //   if(chartType.indexOf('_timeline') === -1){
        //     chartType += '_timeline';
        //   }
        // }

        if (chartMap[chartType] === undefined) {
          return `未定义的 Chart 类型：${chartType}`;
        }

        return /*#__PURE__*/React.createElement(chartMap[chartType], { ...item,
          key: index
        });
      });
    }

    render() {
      const {
        layout,
        title,
        items = []
      } = this.props;

      if (!(items instanceof Array)) {
        console.error('items must is a Array');
        return null;
      } // 过滤有效的 item


      const itemsFilter = items.filter(item => item.chart);
      const layoutMap = { ...LayoutSet
      };
      const Layout = layoutMap[layout] || layoutMap['Grid_1'];
      return /*#__PURE__*/React.createElement("div", {
        className: "Statistic-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "Statistic-row-title"
      }, title), /*#__PURE__*/React.createElement(Layout, null, itemsFilter.map((item, index) => {
        return this.renderChart(item, index);
      })));
    }

  }, _temp;
}