import React from 'react';
import * as DecoratorSet from "../components/Decorator";
export default function NamedDecorator({
  name,
  props,
  children
}) {
  const Decorator = DecoratorSet[name] || tips(name);
  return /*#__PURE__*/React.createElement(Decorator, props, children);
}

function tips(name) {
  return _ => `Decorator ${name} 未定义`;
}