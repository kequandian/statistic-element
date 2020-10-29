import React from 'react';
import "./index.css";
export default function ShadowCartDecorator({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "d-ShadowCartDecorator"
  }, children);
}