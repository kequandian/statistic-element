import React from 'react';
import LineGrid from "../components/lineGrid/LineGrid";
import ColumnChain from "../components/columnChain/ColumnChain";
import Pie from "../components/pie/Pie";
import Bar from "../components/bar/Bar";

const SpecialLabelPieDemo = ({
  field,
  rates,
  pattern,
  name,
  title,
  chart
}) => {
  const pieProps = {
    title: title,
    series: [{
      name: name,
      data: rates
    }]
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LineGrid, null, /*#__PURE__*/React.createElement(Pie, pieProps)));
};

export default SpecialLabelPieDemo;