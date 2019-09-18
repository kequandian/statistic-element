'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _readStyle = require('../../../utils/readStyle');

var _readStyle2 = _interopRequireDefault(_readStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnChain = function (_React$Component) {
  (0, _inherits3.default)(ColumnChain, _React$Component);

  function ColumnChain() {
    (0, _classCallCheck3.default)(this, ColumnChain);
    return (0, _possibleConstructorReturn3.default)(this, (ColumnChain.__proto__ || (0, _getPrototypeOf2.default)(ColumnChain)).apply(this, arguments));
  }

  (0, _createClass3.default)(ColumnChain, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$fieldStyles = _props.fieldStyles,
          fieldStyles = _props$fieldStyles === undefined ? {} : _props$fieldStyles,
          _props$recordStyles = _props.recordStyles,
          recordStyles = _props$recordStyles === undefined ? [] : _props$recordStyles,
          _props$rates = _props.rates,
          rates = _props$rates === undefined ? [] : _props$rates;

      if (!(Array.isArray(rates) && rates.length === 4)) {
        return '预期 rates 是数组且长度为 4';
      }
      var styles = (0, _readStyle2.default)(recordStyles);
      var title = rates[0].name,
          value = rates[0].value;
      var subTitle = rates[1].name,
          subTitleValue = rates[1].value;
      var replenishTitle = rates[2].name,
          replenishValue = rates[2].value;
      var UpOrDown = rates[3].name,
          affix = rates[3].value;

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
          value
        ),
        _react2.default.createElement(
          'div',
          { style: styles(2), className: 'Statistic-Num-subTitle' },
          subTitle + ' ' + subTitleValue
        ),
        _react2.default.createElement(
          'div',
          { style: styles(3), className: 'Statistic-Num-trend' },
          replenishTitle + ' ' + replenishValue + affix,
          renderUpOrDown(UpOrDown)
        )
      );
    }
  }]);
  return ColumnChain;
}(_react2.default.Component); /**
                                * @author LLH
                                * @editor 
                                * @updated 2018年10月31日
                                * @desc
                                * @eg
                                <ColumnChain
                                  rates=[
                                    { name: '', value: '' },
                                    { name: '', value: '' },
                                    { name: '', value: '' },
                                    { name: '', value: '' },
                                  ]
                                >
                                </ColumnChain>
                              */

function renderUpOrDown(UpOrDown) {
  if (UpOrDown === 'up') {
    return _react2.default.createElement(_antd.Icon, { type: 'arrow-up', style: { color: 'red' } });
  }
  if (UpOrDown === 'down') {
    return _react2.default.createElement(_antd.Icon, { type: 'arrow-down', style: { color: 'green' } });
  }
  return UpOrDown;
}
exports.default = ColumnChain;