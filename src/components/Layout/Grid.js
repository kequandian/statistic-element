import React from 'react';
import { Row, Col } from 'antd';

export default ({ children, col }) => {

  return <Row type="flex" justify="space-between" align="middle">
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