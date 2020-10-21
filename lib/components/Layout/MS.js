function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
  * @author LLH
  * @editor
  * @updated 2018年10月23日
  * @desc  展示一个主从的结构。最后一个子组件是 '主'，其它子组件是 '从'。
  * @eg
  <MS
    master="left"
  >
    <Line />
    <Pie />
    <Pie />
  </MS>
*/
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
/**
 *
 * 展示一个主从的结构。最后一个子组件是 '主'，其它子组件是 '从'。
 * @export
 * @class MS
 * @extends {Component}
 */

export default class MS extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderMaster", childList => {
      const Master = childList[childList.length - 1];
      return /*#__PURE__*/React.createElement(Col, {
        span: Master.props && Master.props.span || 1
      }, Master);
    });

    _defineProperty(this, "renderSlave", childList => {
      const Master = childList[childList.length - 1];
      return childList.length > 1 ? /*#__PURE__*/React.createElement(Col, {
        span: 24 - (Master.props && Master.props.span || 1)
      }, childList.slice(0, -1)) : null;
    });
  }

  render() {
    const {
      master,
      children
    } = this.props;
    const childList = React.Children.toArray(children);
    return /*#__PURE__*/React.createElement(Row, {
      type: "flex",
      justify: "space-around",
      align: "middle"
    }, master === 'left' ? /*#__PURE__*/React.createElement(Fragment, null, this.renderMaster(childList), this.renderSlave(childList)) : /*#__PURE__*/React.createElement(Fragment, null, this.renderSlave(childList), this.renderMaster(childList)));
  }

}

_defineProperty(MS, "propsTypes", {
  master: PropTypes.string
});

_defineProperty(MS, "defaultProps", {
  master: 'left'
});