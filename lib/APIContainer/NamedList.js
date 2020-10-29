import React from 'react';
import * as NamedListSet from "../components/NamedList";
export default function NamedList({
  name,
  records,
  props,
  children
}) {
  const NamedList = NamedListSet[name] || tips(name);

  if (Array.isArray(records)) {
    return /*#__PURE__*/React.createElement(NamedList, props, records.map(item => /*#__PURE__*/React.cloneElement(children, { ...item
    })));
  }
}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}