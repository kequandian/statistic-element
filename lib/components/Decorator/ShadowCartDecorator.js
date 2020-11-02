import React from 'react';
import "./index.css";
export default function ShadowCartDecorator({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dShadowCartDecorator"
  }, children);
}