'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _readStyle = require('../../../../utils/readStyle');

var _readStyle2 = _interopRequireDefault(_readStyle);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var _ref$fieldStyles = _ref.fieldStyles,
      fieldStyles = _ref$fieldStyles === undefined ? {} : _ref$fieldStyles,
      _ref$recordStyles = _ref.recordStyles,
      recordStyles = _ref$recordStyles === undefined ? [] : _ref$recordStyles,
      _ref$rates = _ref.rates,
      rates = _ref$rates === undefined ? [] : _ref$rates;

  var styles = (0, _readStyle2.default)(recordStyles);
  return _react2.default.createElement(
    'div',
    { style: fieldStyles, className: 'kqd-statistic-groupCard' },
    rates.map(function (item, i) {
      return _react2.default.createElement(
        'div',
        { className: 'kqd-statistic-groupCard-item', key: i },
        _react2.default.createElement(
          'div',
          { style: styles(0), className: 'kqd-statistic-groupCard-title' },
          item.name
        ),
        _react2.default.createElement(
          'div',
          { style: styles(1), className: 'kqd-statistic-groupCard-value' },
          item.value
        )
      );
    })
  );
}; /**
    * @author LLH
    * @editor 
    * @updated 2018年10月26日
    * @desc 以上下的结构形式展示数据。同一组的会显示在同一个框内。
    * @eg
         <GroupCard
          rates={ 
           [ { name: 'test title', value: 'test value' } ]
          }
         />
    */