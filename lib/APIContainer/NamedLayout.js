import React from 'react';
import * as LayoutSet from "../components/Layout";
export default function NamedLayout({
  name,
  props,
  children
}) {
  const Layout = LayoutSet[name] || tips(name);
  return /*#__PURE__*/React.createElement(Layout, props, children);
}

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}