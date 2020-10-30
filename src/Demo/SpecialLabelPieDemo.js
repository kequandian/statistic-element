import React from 'react';
import LineGrid from '@/components/lineGrid/LineGrid';
import ColumnChain from '@/components/columnChain/ColumnChain';
import Pie from '@/components/pie/Pie';
import Bar from '@/components/bar/Bar';

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
        <Pie {...pieProps}/>
      </LineGrid>
    </div>
  )
}

export default SpecialLabelPieDemo;
