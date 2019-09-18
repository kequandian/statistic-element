'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc   表格统计组件
    * @eg
    <TableStatistic>
      columns = []     //表头信息，必传
      data = []    //数据源
      isRowSelection = false   //表格行是否可选择，默认否
      bordered = false    //是否展示外边框和列边框，默认否
      selectedRowKeys = []  //表格行可选的时候，选中的项
      pagination = false  //表格是否分页，默认否
    </TableStatistic>
 */

var TableStatistic = function (_React$Component) {
  (0, _inherits3.default)(TableStatistic, _React$Component);

  function TableStatistic(props) {
    (0, _classCallCheck3.default)(this, TableStatistic);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TableStatistic.__proto__ || (0, _getPrototypeOf2.default)(TableStatistic)).call(this, props));

    _this.selectedRows = function (value) {
      console.log('kkkkkk value = ', value);
      _this.setState({
        selectedRowKeys: value.selectedRowKeys,
        selectedRows: value.selectedRows
      });
      if (_this.props.onSelectRows) {
        _this.props.onSelectRows(value);
      }
    };

    _this.state = {
      columns: props.columns || [],
      data: props.data || [],
      isRowSelection: props.isRowSelection || false,
      bordered: props.bordered || false,
      selectedRowKeys: props.selectedRowKeys || [],
      selectedRows: [],
      pagination: props.pagination || false
    };
    return _this;
  }

  (0, _createClass3.default)(TableStatistic, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          columns = _state.columns,
          data = _state.data,
          isRowSelection = _state.isRowSelection,
          bordered = _state.bordered,
          selectedRowKeys = _state.selectedRowKeys,
          pagination = _state.pagination;


      data.length > 0 && data.map(function (item, index) {
        data[index] = (0, _extends3.default)({}, item, {
          key: '' + (index + 1)
        });
      });

      var rowSelection = {
        onChange: function onChange(selectedRowKeys, selectedRows) {
          console.log('selectedRowKeys: ' + selectedRowKeys, 'selectedRows: ', selectedRows, selectedRowKeys);
          var data = {
            selectedRows: selectedRows,
            selectedRowKeys: selectedRowKeys
          };
          _this2.selectedRows(data);
        },
        selectedRowKeys: selectedRowKeys
      };

      // const createByColumns = (columns) => columns.length>0 && columns.map((item, index) => {
      //   if(typeof(item) === 'object') {
      //     return item;
      //   } else {
      //     return ({
      //       title: item,
      //       dataIndex: item,
      //       key: item,
      //     });
      //   }
      // })

      return _react2.default.createElement(
        'div',
        null,
        isRowSelection ? _react2.default.createElement(_antd.Table, {
          rowSelection: rowSelection,
          columns: columns,
          dataSource: data,
          bordered: bordered,
          pagination: pagination
        }) : _react2.default.createElement(_antd.Table, {
          columns: columns,
          dataSource: data,
          bordered: bordered,
          pagination: pagination
        })
      );
    }
  }]);
  return TableStatistic;
}(_react2.default.Component);

exports.default = TableStatistic;