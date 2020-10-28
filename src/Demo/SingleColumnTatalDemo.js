import React from 'react';
import ColumnChain from '@/components/columnChain/ColumnChain';

const SingleColumnTatalDemo = ({
  rates
}) => {
  
  let item = {};
  if(Array.isArray(rates)){
    item = rates[0];
  }

  const ColumnChainProps = {
    title: item.name,
    value: item.value,
  }

  return (
    <div style={{display: 'flex'}}>
      <ColumnChain {...ColumnChainProps}/>
    </div>
  )
}

export default SingleColumnTatalDemo;
