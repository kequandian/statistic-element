import React from 'react';
import Chart, { regQueryMethod } from '@/Chart';

// regQueryMethod(func);  // 项目入口注册一个 发起 GET 的方法

const ChartDemo = ({ }) => {
  return (
    <Chart group="stat:profit" />
  )
}

export default ChartDemo;

//      group： stat:order  stat:sales  stat:revenue stat:b:sales stat:b:home
// identifier:1号店$1000