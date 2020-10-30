import React from 'react';
import ColumnChain from '@/components/columnChain/ColumnChain';
import {ShadowCartDecorator} from '@/components/Decorator';

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
      display: 'flex', margin:'12px 8px', justifyContent: 'center'}}>
        <ShadowCartDecorator>
          <ColumnChain {...ColumnChainProps}/>
        </ShadowCartDecorator>
    </div>
  )
}

export default SingleColumnTatalDemo;
