'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Statistic = require('./Statistic');

var _Statistic2 = _interopRequireDefault(_Statistic);

var _ColumnChain = require('./components/ColumnChain');

var _ColumnChain2 = _interopRequireDefault(_ColumnChain);

var _Bar = require('../general-chart/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _Line = require('../general-chart/Line');

var _Line2 = _interopRequireDefault(_Line);

var _Num = require('./components/Num');

var _Num2 = _interopRequireDefault(_Num);

var _GroupCard = require('./components/GroupCard');

var _GroupCard2 = _interopRequireDefault(_GroupCard);

var _Table = require('./components/Table');

var _Table2 = _interopRequireDefault(_Table);

var _Br = require('./components/Br');

var _Br2 = _interopRequireDefault(_Br);

var _timeline = require('./wrapped/timeline');

var _timeline2 = _interopRequireDefault(_timeline);

var _group = require('./wrapped/group');

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Pie from '../general-chart/Pie';
exports.default = (0, _Statistic2.default)({
  // NumberRows,
  // ColumnTotal,
  ColumnChain: _ColumnChain2.default,
  // Pie,
  Bar: _Bar2.default,
  BarTimeline: (0, _timeline2.default)(_Bar2.default),
  BarGroup_2: (0, _group2.default)(_Bar2.default, 2),
  BarGroup_3: (0, _group2.default)(_Bar2.default, 3),
  BarGroup_4: (0, _group2.default)(_Bar2.default, 4),

  Line: _Line2.default,
  LineTimeline: (0, _timeline2.default)(_Line2.default, {
    levelDisplay: false,
    echart: {
      series: {
        smooth: true
      }
    }
  }),
  LineGroup_2: (0, _group2.default)(_Line2.default, 2),
  LineGroup_3: (0, _group2.default)(_Line2.default, 3),
  LineGroup_4: (0, _group2.default)(_Line2.default, 4),

  Num: _Num2.default,
  GroupCard: _GroupCard2.default,
  GroupCardTimeline: (0, _timeline2.default)(_GroupCard2.default),
  Table: _Table2.default,
  Br: _Br2.default
});

// import NumberRows from '../numberRows/NumberRows';
// import ColumnTotal from '../columnTotal/ColumnTotal';