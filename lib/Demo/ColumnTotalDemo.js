import React from 'react';
import ColumnTotal from "../components/columnTotal/ColumnTotal";
import LineGrid from "../components/lineGrid/LineGrid";

const ColumnTotalDemo = ({}) => {
  const props1 = {
    span: 1,
    name: '有效订单金额',
    value: '$6000',
    icon: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=893776491,1251327685&fm=58'
  };
  const props2 = {
    span: 1,
    name: '有效订单数',
    value: '$66',
    icon: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=893776491,1251327685&fm=58',
    nameStyle: {
      color: 'red',
      fontSize: '18px'
    },
    valueStyle: {
      color: 'blue'
    }
  };
  const props3 = {
    span: 1,
    name: '有效订单金额',
    value: '$6000'
  };
  const props4 = {
    span: 1,
    name: '有效订单数',
    value: '$66',
    icon: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=893776491,1251327685&fm=58'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: '#fff'
    }
  }, /*#__PURE__*/React.createElement(LineGrid, null, /*#__PURE__*/React.createElement(ColumnTotal, props1), /*#__PURE__*/React.createElement(ColumnTotal, props2)));
};

export default ColumnTotalDemo;