function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import NumberRows from "../components/numberRows/NumberRows";
import ColumnChain from "../components/columnChain/ColumnChain";
import LineGrid from "../components/lineGrid/LineGrid";
import Pie from "../components/pie/Pie";

const NumberRowsDemo = ({}) => {
  const columnStatisticProps1 = {
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down'
  };
  const columnStatisticProps2 = {
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down'
  };
  const pieProps = {
    span: 3,
    title: '某站点用户访问来源',
    legend: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    series: [{
      name: '访问来源',
      data: [{
        value: 335,
        name: '直接访问'
      }, {
        value: 310,
        name: '邮件营销'
      }, {
        value: 234,
        name: '联盟广告'
      }, {
        value: 135,
        name: '视频广告'
      }, {
        value: 1548,
        name: '搜索引擎'
      }]
    }]
  };
  const numberRowsProps = {
    style: {// background: '#fff'
    }
  };
  return /*#__PURE__*/React.createElement(LineGrid, null, /*#__PURE__*/React.createElement(NumberRows, _extends({
    span: 3
  }, numberRowsProps), /*#__PURE__*/React.createElement(Pie, pieProps)), /*#__PURE__*/React.createElement(NumberRows, _extends({
    span: 1
  }, numberRowsProps), /*#__PURE__*/React.createElement(ColumnChain, columnStatisticProps1), /*#__PURE__*/React.createElement(ColumnChain, columnStatisticProps2)));
};

export default NumberRowsDemo;