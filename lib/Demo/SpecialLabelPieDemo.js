import React from 'react';
import LineGrid from "../components/lineGrid/LineGrid";
import Pie from "../components/pie/Pie";
import { ShadowCartDecorator } from "../components/Decorator";

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
  const lineGridProps = {
    span: 24
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LineGrid, {
    lineGridProps: lineGridProps
  }, /*#__PURE__*/React.createElement(ShadowCartDecorator, null, /*#__PURE__*/React.createElement(Pie, pieProps))));
};

export default SpecialLabelPieDemo;