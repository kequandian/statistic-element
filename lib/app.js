'use strict';

require('antd/dist/antd.css');

var _kqdFramework = require('kqd-framework');

var _index = require('./index');

var menu = [{
  path: 'ChartDemo',
  name: 'ChartDemo'
}, {
  path: 'TagBadgeDemo',
  name: 'TagBadgeDemo'
}, {
  path: 'ColumnTotalDemo',
  name: 'ColumnTotalDemo'
}, {
  path: 'BarDemo',
  name: 'BarDemo'
}, {
  path: 'LineDemo',
  name: 'LineDemo'
}, {
  path: 'PieDemo',
  name: 'PieDemo'
}, {
  path: 'columnChainDemo',
  name: 'columnChainDemo'
}, {
  path: 'StatisticDemo',
  name: 'StatisticDemo'
}, {
  path: 'GridDemo',
  name: 'GridDemo'
}, {
  path: 'NumberRowsDemo',
  name: 'NumberRowsDemo'
}, {
  path: 'RadarDemo',
  name: 'RadarDemo'
}, {
  path: 'ProgressRingDemo',
  name: 'ProgressRingDemo'
}, {
  path: 'InstrumentDemo',
  name: 'InstrumentDemo'
}, {
  path: 'TableStatisticDemo',
  name: 'TableStatisticDemo'
}, {
  path: 'NewProgressRingDemo',
  name: 'NewProgressRingDemo'
}];

var routerData = [{
  path: '/ChartDemo',
  models: [],
  component: function component() {
    return import('./Demo/ChartDemo');
  }
}, {
  path: '/TagBadgeDemo',
  models: [],
  component: function component() {
    return import('./Demo/TagBadgeDemo');
  }
}, {
  path: '/ColumnTotalDemo',
  models: [],
  component: function component() {
    return import('./Demo/ColumnTotalDemo');
  }
}, {
  path: '/BarDemo',
  models: [],
  component: function component() {
    return import('./Demo/BarDemo');
  }
}, {
  path: '/LineDemo',
  models: [],
  component: function component() {
    return import('./Demo/LineDemo');
  }
}, {
  path: '/PieDemo',
  models: [],
  component: function component() {
    return import('./Demo/PieDemo');
  }
}, {
  path: '/columnChainDemo',
  models: [],
  component: function component() {
    return import('./Demo/ColumnChainDemo');
  }
}, {
  path: '/StatisticDemo',
  models: [],
  component: function component() {
    return import('./Demo/StatisticDemo');
  }
}, {
  path: '/GridDemo',
  models: [],
  component: function component() {
    return import('./Demo/GridDemo');
  }
}, {
  path: '/NumberRowsDemo',
  models: [],
  component: function component() {
    return import('./Demo/NumberRowsDemo');
  }
}, {
  path: '/RadarDemo',
  models: [],
  component: function component() {
    return import('./Demo/RadarDemo');
  }
}, {
  path: '/ProgressRingDemo',
  models: [],
  component: function component() {
    return import('./Demo/ProgressRingDemo');
  }
}, {
  path: '/InstrumentDemo',
  models: [],
  component: function component() {
    return import('./Demo/InstrumentDemo');
  }
}, {
  path: '/TableStatisticDemo',
  models: [],
  component: function component() {
    return import('./Demo/TableStatisticDemo');
  }
}, {
  path: '/NewProgressRingDemo',
  models: [],
  component: function component() {
    return import('./Demo/NewProgressRingDemo');
  }
}];

(0, _kqdFramework.addModule)({ locales: _index.locales, routerData: routerData, menu: menu });

(0, _kqdFramework.framework)();
(0, _kqdFramework.app)();