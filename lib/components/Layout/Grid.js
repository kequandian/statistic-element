import React from 'react';
import { Row, Col } from 'antd';
export default (({
  children,
  col,
  justify = 'space-between',
  align = 'middle'
}) => {
  return /*#__PURE__*/React.createElement(Row, {
    type: "flex",
    justify: justify,
    align: align
  }, React.Children.map(children, child => {
    return /*#__PURE__*/React.createElement(Col, {
      sm: computeSpan(col, child.props.span)
    }, child);
  }));
});

function computeSpan(col, span) {
  return ~~(24 / col) * span || 24;
}