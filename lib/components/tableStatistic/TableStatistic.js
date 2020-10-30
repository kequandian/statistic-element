import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { formatTableFields } from 'zero-element-antd/lib/container/List/utils/format';
export default function TableStatistic(props) {
  const {
    title,
    rows,
    header,
    columns,
    ...pagination
  } = props;
  const [tColumns, setTColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(_ => {
    if (Array.isArray(header) && Array.isArray(columns) && Array.isArray(rows)) {
      const tColumns = toFormatTableFields(formatColumns(header, columns));
      setTColumns(tColumns);
      setRecords(rows.map((item, i) => ({
        id: i,
        ...item
      })));
    }
  }, [rows, header, columns]);

  function handleRowClassName(record, index) {
    if (index % 2 === 1) {
      return 'ZEleA-table-odd';
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("h2", null, title), /*#__PURE__*/React.createElement(Table, {
    key: "id",
    size: "middle",
    rowClassName: handleRowClassName,
    columns: tColumns,
    dataSource: records,
    pagination: false
  }));
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
      ...typeMap[typeList[i]]
    });
  });
  return rst;
}

function toFormatTableFields(params) {
  const {
    columns
  } = formatTableFields(params);
  return columns.filter(i => i.dataIndex !== 'id');
}

const typeMap = {
  'A': {
    // 头像
    valueType: 'complex',
    align: 'center',
    options: {
      fields: [{
        field: '头像',
        type: 'image'
      }, {
        field: '名称',
        type: 'plain'
      }]
    }
  },
  'D': {
    // 金钱
    valueType: 'currency',
    align: 'right',
    options: {
      nullPlaceholder: '-'
    }
  },
  'T': {},
  // 时间
  'P': {
    // 百分比
    valueType: 'percentage',
    align: 'right',
    options: {
      nullPlaceholder: '-'
    }
  },
  'C': {
    // 数量
    align: 'right'
  },
  'S': {} // 字符串

};