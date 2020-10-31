import React from 'react';
import styles from "./index.css";
export default function ShadowCartDecorator({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.dShadowCartDecorator
  }, children);
}