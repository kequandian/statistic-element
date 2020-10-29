import React from 'react';
import { Row, Col } from 'antd';
export default (({
  children,
  col
}) => {
  return /*#__PURE__*/React.createElement(Row, {
    type: "flex",
    justify: "space-between",
    align: "middle"
  }, React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(Col, {
      sm: computeSpan(col)
    }, child);
  }));
});

function computeSpan(col) {
  return ~~(24 / col);
}