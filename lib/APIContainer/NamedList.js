function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import * as NamedListSet from "../components/NamedList";
import { query } from 'zero-element-antd/lib/utils/request';
export default function NamedList({
  name,
  API,
  props,
  children
}) {
  const NamedList = NamedListSet[name] || tips(name);

  function handleQuery(queryData) {
    return query(API, queryData);
  }

  return /*#__PURE__*/React.createElement(NamedList, _extends({}, props, {
    onQuery: handleQuery
  }), children);
}

function tips(name) {
  return _ => `NamedList ${name} 未定义`;
}