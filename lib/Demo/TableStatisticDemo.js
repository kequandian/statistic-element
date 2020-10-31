import React from 'react';
import TableStatistic from "../components/tableStatistic/TableStatistic";
import { ShadowCartDecorator } from "../components/Decorator";

const TableStatisticDemo = ({
  columns,
  current,
  header,
  pages,
  rows,
  searchColumns,
  size,
  tips,
  total
}) => {
  const tableStatisticProps = {
    columns: columns,
    rows: rows,
    header: header,
    title: ''
  };
  return /*#__PURE__*/React.createElement(ShadowCartDecorator, null, /*#__PURE__*/React.createElement(TableStatistic, tableStatisticProps));
};

export default TableStatisticDemo;