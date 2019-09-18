'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _TableStatistic = require('../components/tableStatistic/TableStatistic');

var _TableStatistic2 = _interopRequireDefault(_TableStatistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableStatisticDemo = function TableStatisticDemo(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);


  var tableStatisticProps = {
    columns: [{
      title: 'Name',
      dataIndex: 'name'
    }, {
      title: 'Age',
      dataIndex: 'age'
    }, {
      title: 'Address',
      dataIndex: 'address'
    }],
    data: [{
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    }, {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    }],
    bordered: true,
    isRowSelection: true
  };

  return React.createElement(
    'div',
    null,
    React.createElement(_TableStatistic2.default, tableStatisticProps)
  );
};

exports.default = TableStatisticDemo;