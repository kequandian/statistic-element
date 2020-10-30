import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

export default function TableStatistic(props) {
  const { title, rows, header, columns, ...pagination } = props;
  const [tColumns, setTColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(_ => {
    if (Array.isArray(header) && Array.isArray(columns) && Array.isArray(rows)) {
      const tColumns = formatTableFields(
        formatColumns(header, columns)
      );

      setTColumns(tColumns);
      setRecords(rows.map((item, i) => ({ id: i, ...item })));
    }
  }, [rows, header, columns]);

  return <div style={{ padding: 16 }}>
    <h2>{title}</h2>
    <Table
      key="id"
      size="middle"
      columns={tColumns}
      dataSource={records}
      pagination={false}
    />
  </div>
}

/**
 * 返回 标准 columns
 * @param {array} titleList 
 * @param {array} typeList 
 */
function formatColumns(titleList, typeList) {
  const rst = [];
  titleList.forEach((title, i) => {
    rst.push({
      label: title,
      field: title,
      ...typeMap[typeList[i]],
    });
  });
  return rst;
}

function formatTableFields(params) {

  return params.map(item => {
    const { label, field, ...rest } = item;
    return {
      ...rest,
      title: label,
      dataIndex: field,
    }
  });
}

const typeMap = {
  'D': { // 金钱
    valueType: 'currency',
    align: 'right',
    options: {
      nullPlaceholder: '-',
    },
  },
  'T': {},// 时间
  'P': { // 百分比
    valueType: 'percentage',
    align: 'right',
    options: {
      nullPlaceholder: '-',
    },
  },
  'C': { // 数量
    align: 'right',
  },
  'S': {}, // 字符串
};