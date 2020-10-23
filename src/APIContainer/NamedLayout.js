import React from 'react';
import * as LayoutSet from '@/components/Layout';

export default function NamedLayout({ name, props, children }) {
  const Layout = LayoutSet[name] || LayoutSet['Grid_1'];

  return <Layout {...props}>
    {children}
  </Layout>
}