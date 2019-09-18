'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _readStyle = require('../../../utils/readStyle');

var _readStyle2 = _interopRequireDefault(_readStyle);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @author LLH
  * @editor 
  * @updated 2018年10月31日
  * @desc
  * @eg
  <Num
    rates=[
      { name: '', value: '' },
      { name: '', value: '' },
    ]
  >
  </Num>
*/

exports.default = function (_ref) {
  var _ref$fieldStyles = _ref.fieldStyles,
      fieldStyles = _ref$fieldStyles === undefined ? {} : _ref$fieldStyles,
      _ref$recordStyles = _ref.recordStyles,
      recordStyles = _ref$recordStyles === undefined ? [] : _ref$recordStyles,
      _ref$rates = _ref.rates,
      rates = _ref$rates === undefined ? [] : _ref$rates;

  if (!(Array.isArray(rates) && rates.length === 2)) {
    return '预期 rates 是数组且长度为 2';
  }
  var styles = (0, _readStyle2.default)(recordStyles);
  var title = rates[0].name || '',
      total = rates[0].value || '0',
      percentage = rates[1].value || '0';

  return _react2.default.createElement(
    'div',
    { style: fieldStyles, className: 'Statistic-Num-box' },
    _react2.default.createElement(
      'div',
      { style: styles(0), className: 'Statistic-Num-title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { style: styles(1), className: 'Statistic-Num-value' },
      total
    ),
    _react2.default.createElement(
      'div',
      { style: styles(2), className: 'Statistic-Num-trend' },
      renderIcon(percentage),
      ' ',
      rates[1].name || '-'
    )
  );
};

function renderIcon(percentage) {
  var increase = true;
  if (percentage.indexOf('-') > -1) {
    increase = false;
    percentage = percentage.replace('-', '');
  }
  if (increase) {
    return _react2.default.createElement(
      'span',
      { style: { color: '#f04844' } },
      _react2.default.createElement(_antd.Icon, { type: 'caret-up', theme: 'outlined' }),
      ' ',
      percentage,
      '%'
    );
  }
  return _react2.default.createElement(
    'span',
    { style: { color: '#00a950' } },
    _react2.default.createElement(_antd.Icon, { type: 'caret-down', theme: 'outlined' }),
    ' ',
    percentage,
    '%'
  );
}