function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import * as CartSet from "../export";
export default function NamedCart({
  name,
  data,
  ...rest
}) {
  const Cart = CartSet[name] || tips(name);
  return /*#__PURE__*/React.createElement(Cart, _extends({}, data, rest));
}

function tips(name) {
  return _ => `Cart ${name} 未定义`;
}