function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
export default ((ChartComponent, count) => {
  return props => {
    // 这里没有把 name 、title 传递下去
    const {
      name,
      title,
      rates = [],
      ...rest
    } = props;
    const series = [];
    const axis = [];
    const nameList = name.split('|');

    for (let index = 0; index < count; index++) {
      series.push({
        name: nameList[index],
        // type: props.name,
        data: []
      });
    }

    rates.forEach((item, i) => {
      if (i % count === 0) {
        axis.push(item.name);
      }

      series[i % count].data.push(item.value);
    });
    return /*#__PURE__*/React.createElement(ChartComponent, _extends({}, rest, {
      axis: axis,
      series: series
    }));
  };
});