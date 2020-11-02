import React from 'react';
import ColumnChain from "../components/columnChain/ColumnChain";
import { ShadowCartDecorator } from "../components/Decorator";

const SingleColumnTatalDemo = ({
  rates
}) => {
  let item = {};

  if (Array.isArray(rates)) {
    item = rates[0];
  }

  const ColumnChainProps = {
    title: item.name,
    value: item.value
  };
  console.log('rates = ', rates);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(ShadowCartDecorator, null, /*#__PURE__*/React.createElement(ColumnChain, ColumnChainProps)));
};

export default SingleColumnTatalDemo;