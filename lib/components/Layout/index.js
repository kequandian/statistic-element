function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import GridLayout from "./Grid";
import WrappedGridLayout from "./WrappedGrid";
import MS from "./MS";
export const Grid = GridLayout;
export const WrappedGrid = WrappedGridLayout;
export const MS_left = MS;
export const MS_right = props => /*#__PURE__*/React.createElement(MS, _extends({}, props, {
  master: "right"
}));