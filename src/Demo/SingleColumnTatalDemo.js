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
    titleStyle:{
      fontSize: '15px'
    },
    valueStyle:{
      fontSize: '35px'
    }
  }

  // console.log('rates = ', rates)

  return (
      <ShadowCartDecorator>
        <div style={{display:'flex', justifyContent:'center'}}>
          <ColumnChain {...ColumnChainProps}/>
        </div>
      </ShadowCartDecorator>
  )
}

export default SingleColumnTatalDemo;
