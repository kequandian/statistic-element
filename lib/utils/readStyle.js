"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readStyle;


/**
 * 用于从 样式对象的列表里 读取样式
 *
 * @export
 * @param {*} styleArray
 * @returns
 */
function readStyle() {
  var styleArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return function safety(index) {
    return styleArray[index] || {};
  };
}