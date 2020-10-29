import React from 'react';
import { Row, Col } from 'antd';

export default ({ children, col, justify = 'space-between', align = 'middle' }) => {

  return <Row type="flex" justify={justify} align={align}>
    {React.Children.map(children, child => {
      return <Col sm={computeSpan(col, child.props.span)}>
        {child}
      </Col>
    })}
  </Row>
}

function computeSpan(col, span = 1) {
  return ~~(24 / col) * span;
}