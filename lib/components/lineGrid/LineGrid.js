'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
    * @author Yang,YN  2018-9-11
    * @editor
    * @updated
    * @desc  栅格布局
    * @eg     //注意： 子组件应该传入span代表占据多少列
    <Grid>
      children
    </Grid>
 */

var LineGrid = function LineGrid(_ref) {
  var children = _ref.children;


  console.log('kkkkkkk children', children);
  if (Array.isArray(children) == true && children.length > 0) {
    children.map(function (item, index) {
      if (!item) {
        children.splice(index, 1);
      }
    });
  }

  console.log('kkkkklllllll children = ', children);

  var createList = function createList(children) {
    return children && children.length >= 0 && children.map(function (item, index) {
      return _react2.default.createElement(
        _antd.Col,
        { span: item && item.props && item.props.span ? 6 * item.props.span : 6, key: index, style: { margin: '8px 0' } },
        item
      );
    });
  };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _antd.Row,
      { type: 'flex', justify: 'start' },
      createList(children),
      children != undefined && Array.isArray(children) == false ? _react2.default.createElement(
        _antd.Col,
        { span: children && children.props && children.props.span ? 6 * children.props.span : 6, style: { margin: '8px 0' } },
        children
      ) : null
    )
  );
};

exports.default = LineGrid;