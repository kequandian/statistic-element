import React from 'react';
import * as LayoutSet from "../components/Layout";
export default function NamedLayout({
  name,
  props,
  layout,
  children,
  ...rest
}) {
  let layoutConfig = { ...layout
  };

  if (typeof props === 'string') {
    layoutConfig = { ...layout,
      name: props
    };
  } else {
    layoutConfig = {
      name,
      ...props,
      ...layout
    };
  }

  const Layout = LayoutSet[layoutConfig.name] || tips(layoutConfig.name);
  return /*#__PURE__*/React.createElement(Layout, layoutConfig, React.Children.toArray(children).map(child => {
    return /*#__PURE__*/React.cloneElement(child, { ...rest
    });
  }));
}

function tips(name) {
  return _ => `Layout ${name} 未定义`;
}