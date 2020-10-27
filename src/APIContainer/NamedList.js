import React from 'react';
import * as NamedListSet from '@/components/NamedList';

export default function NamedList({ name, records, props, children }) {
  const NamedList = NamedListSet[name] || tips(name);

  if (Array.isArray(records)) {
    return <NamedList {...props}>
      {records.map(item => React.cloneElement(children, {
        ...item,
      }))}
    </NamedList>
  }

}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}