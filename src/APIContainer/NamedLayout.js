import React from 'react';
import * as LayoutSet from '@/components/Layout';

export default function NamedLayout({ name, props, layout, children, ...rest }) {

  let layoutConfig = { ...layout };

  if (typeof props === 'string') {
    layoutConfig = {
      ...layout,
      name: props,
    };
  } else {
    layoutConfig = { name, ...props, ...layout };
  }

  const Layout = LayoutSet[layoutConfig.name] || tips(layoutConfig.name);

  return <Layout {...layoutConfig}>
    {React.Children.toArray(children).map(child => {
      return React.cloneElement(child, {
        ...rest
      })
    })}
  </Layout>
}

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}