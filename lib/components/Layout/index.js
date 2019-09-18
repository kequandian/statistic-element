'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MS_right = exports.MS_left = exports.Grid_6 = exports.Grid_4 = exports.Grid_3 = exports.Grid_2 = exports.Grid_1 = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _MS = require('./MS');

var _MS2 = _interopRequireDefault(_MS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid_1 = exports.Grid_1 = (0, _Grid2.default)(1);
var Grid_2 = exports.Grid_2 = (0, _Grid2.default)(2);
var Grid_3 = exports.Grid_3 = (0, _Grid2.default)(3);
var Grid_4 = exports.Grid_4 = (0, _Grid2.default)(4);
var Grid_6 = exports.Grid_6 = (0, _Grid2.default)(6);

var MS_left = exports.MS_left = _MS2.default;
var MS_right = exports.MS_right = function MS_right(props) {
  return _react2.default.createElement(_MS2.default, (0, _extends3.default)({}, props, { master: 'right' }));
};