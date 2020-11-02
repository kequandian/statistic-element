import React from 'react';
import * as NamedListSet from '@/components/NamedList';
import { query } from 'zero-element-antd/lib/utils/request';

export default function NamedList({ name, API, props, children }) {
  const NamedList = NamedListSet[name] || tips(name);

  function handleQuery(queryData) {
    return query(API, queryData);
  }

  return <NamedList {...props} onQuery={handleQuery}>
    {children}
  </NamedList>

}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}