import React from 'react';
import { Row, Col } from 'antd';
import LineGrid from '@/components/lineGrid/LineGrid';
import Pie from '@/components/pie/Pie';
import {ShadowCartDecorator} from '@/components/Decorator';

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
    series: [
        {
            name: name,
            data: rates
        },
    ]
  }
  
  const lineGridProps = {span:24}

  return (
    <div >
      <LineGrid lineGridProps={lineGridProps}>
        <ShadowCartDecorator>
          <Row justify="center">
            <Col span={12} >
              <Pie {...pieProps}/>
            </Col>
          </Row>
        </ShadowCartDecorator>
      </LineGrid>
    </div>
  )
}

export default SpecialLabelPieDemo;
