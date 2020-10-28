import React from 'react';
import ColumnChain from '@/components/columnChain/ColumnChain';

const SingleColumnTatalDemo = ({
    field,
    name,
    pattern,
    title,
    value,
    chart,
    span
}) => {

  const ColumnChainProps = {
    title: name,
    value: value,
  }

  return (
    <div style={{display: 'flex'}}>
      <ColumnChain {...ColumnChainProps}/>
    </div>
  )
}

export default SingleColumnTatalDemo;
