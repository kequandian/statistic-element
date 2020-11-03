import React from 'react';
import TableStatistic from '@/components/tableStatistic/TableStatistic';
import { ShadowCartDecorator } from '@/components/Decorator';

const TableStatisticDemo = ({
  columns,
  title,
  current,
  header,
  pages,
  rows,
  searchColumns,
  size,
  tips,
  total,
}) => {

  const tableStatisticProps = {
    columns: columns,
    rows: rows,
    header: header,
    title: title,
  }

  return (
    <ShadowCartDecorator>
      <TableStatistic {...tableStatisticProps} />
    </ShadowCartDecorator>
  )
}

export default TableStatisticDemo;
