"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require("babel-runtime/helpers/objectDestructuringEmpty");

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _Chart = require("../components/Chart");

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartDemo = function ChartDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);

  return React.createElement(_Chart2.default, { group: "stat:profit" });
};

exports.default = ChartDemo;

//      group： stat:order  stat:sales  stat:revenue stat:b:sales stat:b:home
// identifier:1号店$1000