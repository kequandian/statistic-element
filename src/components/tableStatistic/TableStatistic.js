import React from 'react';
import { Table } from 'antd';

export default function TableStatistic(props) {
  const { columns = [], data = [], bordered, pagination } = props;

  return <Table
    key="id"
    columns={columns}
    dataSource={data}
    bordered={bordered}
    pagination={pagination}
  />
}
