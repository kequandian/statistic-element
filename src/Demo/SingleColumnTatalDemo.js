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
    <div style={{
      display: 'flex', marginTop:'70px', marginBottom:'70px', background:'#f2f2f3', justifyContent: 'center'}}>
      <ColumnChain {...ColumnChainProps}/>
    </div>
  )
}

export default SingleColumnTatalDemo;
