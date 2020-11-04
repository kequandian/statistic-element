import React from 'react';
import Bar from "../components/general-chart/Bar";
import LineGrid from "../components/lineGrid/LineGrid";
import { ShadowCartDecorator } from "../components/Decorator";

const MonthReportSingleDemo = ({
  identifier,
  field,
  rates,
  name,
  pattern,
  tl,
  title,
  chart,
  span,
  icon
}) => {
  let newLegend = {
    type: 'category',
    data: []
  };
  let unit = '';
  const seriesItem = {
    name: '',
    type: 'bar',
    barWidth: '30%',
    data: []
  };

  if (icon && Array.isArray(icon) && icon.length > 0) {
    unit = icon[0].value;
  }

  const valueList = [];

  if (rates && rates.length > 0) {
    if (rates && rates.length > 0) {
      rates.map((item, index) => {
        const dataItem = {};
        dataItem.markLine = {
          data: []
        };
        const valueListItem = {
          unit,
          value: item.value
        };
        newLegend.data.push(item.name);
        valueList.push(valueListItem);
      });
    }
  }

  seriesItem.data = valueList;
  seriesItem.markLine = {
    data: []
  };
  const xAxisData = {
    color: ['#61A0A8'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

      }
    },
    legend: {
      data: ['']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: newLegend.data,
      axisTick: {
        alignWithLabel: true
      }
    }]
  };
  const barProps = {
    levelDisplay: false,
    title: title,
    series: [seriesItem],
    echart: xAxisData
  };
  const lineGridProps = {
    span: 24
  };
  return /*#__PURE__*/React.createElement(LineGrid, {
    lineGridProps: lineGridProps
  }, /*#__PURE__*/React.createElement(ShadowCartDecorator, null, /*#__PURE__*/React.createElement(Bar, barProps)));
};

export default MonthReportSingleDemo;