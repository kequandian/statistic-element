import React from 'react';
import { Table } from 'antd';

const StatisticTable = ({
  rates,
  ...rest
}) => {
  const tableProps = {
    dataSource: rates
  };
  return /*#__PURE__*/React.createElement(Table, tableProps);
};

export default StatisticTable;