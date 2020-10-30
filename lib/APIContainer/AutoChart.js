function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import * as chartSet from "../export";
import NamedLayout from "./NamedLayout";
export default function AutoChart(props) {
  const {
    layout,
    children,
    list
  } = props;
  const data = list || children;

  if (!Array.isArray(data)) {
    console.warn('未传入 children 或传入的 children 非数组. props: ', props);
    return null;
  }

  return /*#__PURE__*/React.createElement(NamedLayout, {
    props: layout
  }, data.map(child => {
    const {
      presenter,
      field,
      data
    } = child;
    const Chart = chartSet[presenter] || Tips(presenter);
    return /*#__PURE__*/React.createElement(Chart, _extends({
      key: field
    }, data));
  }));
}

function Tips(name) {
  return function () {
    return `图表 ${name} 未定义`;
  };
}