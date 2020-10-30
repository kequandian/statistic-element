import React from 'react';
import * as chartSet from '@/export';
import NamedLayout from './NamedLayout';

export default function AutoChart(props) {
  const { layout, children, list } = props;

  const data = list || children;
  if (!Array.isArray(data)) {
    console.warn('未传入 children 或传入的 children 非数组. props: ', props);

    return null;
  }

  return <NamedLayout props={layout}>
    {data.map(child => {
      const { presenter, field, data } = child;
      const Chart = chartSet[presenter] || Tips(presenter);

      return <Chart key={field} {...data} />
    })}
  </NamedLayout>
}

function Tips(name) {
  return function () {
    return `图表 ${name} 未定义`
  }
}