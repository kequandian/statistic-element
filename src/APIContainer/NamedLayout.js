import React from 'react';
import * as LayoutSet from '@/components/Layout';

export default function NamedLayout({ name, props, children }) {
  const Layout = LayoutSet[name] || tips(name);

  return <Layout {...props}>
    {children}
  </Layout>
}

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}