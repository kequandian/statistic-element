'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _badge = require('antd-mobile/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _grid = require('antd-mobile/lib/grid');

var _grid2 = _interopRequireDefault(_grid);

require('antd-mobile/dist/antd-mobile.css');

var _kqdLayoutFlex = require('kqd-layout-flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TagBadge = function TagBadge(_ref) {
  var _ref$listNumber = _ref.listNumber,
      listNumber = _ref$listNumber === undefined ? 4 : _ref$listNumber,
      _ref$list = _ref.list,
      list = _ref$list === undefined ? [] : _ref$list,
      _ref$overflowCount = _ref.overflowCount,
      overflowCount = _ref$overflowCount === undefined ? 999 : _ref$overflowCount,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? { //默认样式，可传入修改
    display: 'inline-block',
    border: '1px solid #FF8D1A',
    padding: '5px 10px',
    color: '#FF8D1A',
    borderRadius: '5px',
    fontSize: '13px'
  } : _ref$style,
      _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === undefined ? function () {} : _ref$onClick;

  return _react2.default.createElement(
    'div',
    null,
    list.length > 0 ? _react2.default.createElement(
      _kqdLayoutFlex.GridLayout,
      { listNumber: listNumber },
      list.map(function (item, index) {
        return _react2.default.createElement(
          _badge2.default,
          { text: item.badge, overflowCount: overflowCount, key: index },
          _react2.default.createElement(
            'span',
            { style: style, onClick: function onClick() {
                return _onClick(item);
              } },
            item.tag
          )
        );
      })
    ) : null
  );
}; /**
       * @author Yang,YN
       * @editor
       * @updated
       * @desc
       * @eg
       <TagBadge>
         listNumber = ''   //默认显示4列
         list = []        //数据源
         overflowCount = 999    //默认超出范围显示999+
       </TagBadge>
    */

exports.default = TagBadge;