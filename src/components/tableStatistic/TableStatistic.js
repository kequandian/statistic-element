import React, { useState, useEffect } from 'react';
import { Typography, Table } from 'antd';
import { formatTableFields } from 'zero-element-antd/lib/container/List/utils/format';
import './index.css';

const { Title } = Typography;

export default function TableStatistic(props) {
  const { title, rows, header, columns, ...pagination } = props;
  const [tColumns, setTColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(_ => {
    if (Array.isArray(header) && Array.isArray(columns) && Array.isArray(rows)) {
      const tColumns = toFormatTableFields(
        formatColumns(header, columns, rows)
      );

      setTColumns(tColumns);
      setRecords(rows.map((item, i) => ({ id: i, ...item })));
    }
  }, [rows, header, columns]);

  function handleRowClassName(record, index) {
    if (index % 2 === 1) {
      return 'ZEleA-table-odd';
    }
  }

  return <div>
    {title ? (<Title level={5}>{title}</Title>) : null}
    <Table
      rowKey="id"
      size="middle"
      className="s-TableStatistic"
      rowClassName={handleRowClassName}
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
function formatColumns(titleList, typeList, rows) {
  const rst = [];
  titleList.forEach((title, i) => {
    let data = {
      label: title,
      field: title,
    };

    if (typeof typeMap[typeList[i]] === 'function') {
      data = {
        ...data,
        ...typeMap[typeList[i]](title, rows)
      }
    } else {
      data = {
        ...data,
        ...typeMap[typeList[i]]
      }
    }
    rst.push(data);
  });
  return rst;
}

function toFormatTableFields(params) {
  const { columns } = formatTableFields(params);

  return columns.filter(i => i.dataIndex !== 'id');
}

const typeMap = {
  'A': function (title, rows) {// 头像

    if (Array.isArray(rows)) {
      rows.forEach(row => {
        const value = row[title];

        if (Array.isArray(value)) {
          row._name = value[0];
          row._avatar = value[1];
        }
      })
    }

    return {
      valueType: 'complex',
      align: 'left',
      options: {
        fields: [
          { field: '_avatar', type: 'image' },
          {
            field: '_name', type: 'plain', options: {
              style: {
                fontWeight: 900
              }
            }
          },
        ]
      },
    }
  },
  'B': { // 粗体
    valueType: 'plain',
    options: {
      style: {
        fontWeight: 900
      }
    },
  },
  'C': { // 数量
    align: 'center',
    valueType: 'plain',
    options: {
      style: {
        fontWeight: 900,
        fontSize: 18,
        color: '#1B7FBC',
      }
    },
  },
  'D': { // 金钱
    valueType: 'currency',
    align: 'right',
    options: {
      nullPlaceholder: '-',
    },
  },
  'I': { // 索引
    valueType: 'index',
  },
  'P': { // 百分比
    valueType: 'percentage',
    align: 'right',
    options: {
      nullPlaceholder: '-',
    },
  },
  'S': {}, // 字符串
  'T': {},// 时间
  'UA': function (title, rows) {// 用户头像-圆角

    if (Array.isArray(rows)) {
      rows.forEach(row => {
        const value = row[title];

        if (Array.isArray(value)) {
          row._name = value[0];
          row._avatar = value[1];
        }
      })
    }

    return {
      valueType: 'complex',
      align: 'left',
      options: {
        fields: [
          {
            field: '_avatar', type: 'image', options: {
              circle: true,
            }
          },
          {
            field: '_name', type: 'plain', options: {
              style: {
                fontWeight: 900
              }
            }
          },
        ]
      },
    }
  },
};