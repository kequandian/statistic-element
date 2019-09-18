'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _Instrument = require('../components/instrument/Instrument');

var _Instrument2 = _interopRequireDefault(_Instrument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstrumentDemo = function InstrumentDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var InstrumentProps = {
    name: '百分比',
    value: 22,
    titleType: '岁'
  };

  return React.createElement(
    'div',
    null,
    React.createElement(_Instrument2.default, InstrumentProps)
  );
};

exports.default = InstrumentDemo;