import React from 'react';
import { Row, Col } from 'antd';
export default (({
  children,
  props = {}
}) => {
  const {
    col,
    justify = 'space-between',
    align = 'middle'
  } = props;
  return /*#__PURE__*/React.createElement(Row, {
    type: "flex",
    justify: justify,
    align: align
  }, React.Children.map(children, child => {
    console.log('child.props = ', child.props);
    return /*#__PURE__*/React.createElement(Col, {
      sm: computeSpan(col, child.props.span)
    }, child);
  }));
});

function computeSpan(col, span = 1) {
  return ~~(24 / col) * span || 24;
}