import React from 'react';
import { Row, Col } from 'antd';

export default ({ children, col }) => {

  return <Row type="flex" justify="space-between" align="middle">
    {React.Children.map(children, child => {
      return <Col sm={computeSpan(col)}>
        {child}
      </Col>
    })}
  </Row>
}

function computeSpan(col) {
  return ~~(24 / col);
}