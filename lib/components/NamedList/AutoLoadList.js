import React, { useState, useRef } from 'react';
import { useScroll, useSize } from 'ahooks';
export default function AutoLoadList() {
  const containerRef = useRef(null);
  const scroll = useScroll(containerRef);
  const size = useSize(containerRef);
  console.log(123, size, scroll);
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef
  }, /*#__PURE__*/React.createElement("h1", null, "1111111"));
}