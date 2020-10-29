import React from 'react';
import * as chartSet from '@/export';
import NamedLayout from './NamedLayout';

export default function AutoChart(props) {
  const { layout, children } = props;

  if (!Array.isArray(children)) {
    console.warn('未传入 children 或传入的 children 非数组. props: ', props);

    return null;
  }

  let layoutConfig = {};

  if (typeof layout === 'string') {
    layoutConfig = {
      name: layout,
    };
  } else {
    layoutConfig = { ...layout };
  }

  return <NamedLayout {...layoutConfig}>
    {children.map(child => {
      const { presenter, field } = child;
      const chartName = presenter.replace(/^\S/, s => s.toUpperCase());
      const Chart = chartSet[chartName] || Tips(chartName);
      const data = props[field] || {};

      if (!props[field]) {
        console.warn(`未能读取到数据 field: ${field}`, props);
      }

      return <Chart {...data} />
    })}
  </NamedLayout>
}

function Tips(name) {
  return function () {
    return `图表 ${name} 未定义`
  }
}