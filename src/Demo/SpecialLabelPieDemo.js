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

    console.log('field = ', field);
    console.log('rates = ', rates);
    console.log('pattern = ', pattern);
    console.log('name = ', name);
    console.log('title = ', title);
    console.log('chart = ', chart);

  const columnStatisticProps1 = {
    span: 1,
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down',
  }

  const columnStatisticProps2 = {
    span: 1,
    title: '今日销售额',
    subTitle: '昨日：*19000',
    value: '*18000',
    note: '下降 2%',
    iconType: 'down',
  }



  const pieProps = {
    title: title,
    series: [
        {
            name: name,
            data: rates
        },
    ]
  }

  return (
    <div>
      <LineGrid>
        <Pie {...pieProps}/>
        {/* <ColumnChain {...columnStatisticProps1}/> */}
      </LineGrid>
    </div>
  )
}

export default SpecialLabelPieDemo;
