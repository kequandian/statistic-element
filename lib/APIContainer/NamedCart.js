import React from 'react';
import * as CartSet from "../export";
export default function NamedCart({
  name,
  ...rest
}) {
  const Cart = CartSet[name] || tips(name);
  return /*#__PURE__*/React.createElement(Cart, rest);
}

function tips(name) {
  return _ => `Cart ${name} 未定义`;
}