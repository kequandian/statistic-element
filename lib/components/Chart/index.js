function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
  * @author LLH
  * @editor
  * @updated 2018年10月25日
  * @desc  传入 group ，渲染一整页 chart
  * @eg
  <Chart group="stat:order" />
*/
import React, { Component } from 'react'; // import { query } from 'kqd-utils/lib/services';

import { Spin } from 'antd';
import Statistic from "../statistic";
export default class Chart extends Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "queryData", () => {
      const {
        group,
        identifier
      } = this.state;

      if (group === undefined) {
        this.setState({
          errorMsg: 'props: group 是必须的'
        });
        return false;
      }

      this.setState({
        loading: true
      });
      console.error('TODO'); // query(`/api/stat/groups/${group}`, {
      //   identifier,
      // }).then(({ code, data, message }) => {
      //   if (code === 200) {
      //     this.setState({
      //       data,
      //       errorMsg: '',
      //       loading: false,
      //       update: false,
      //     });
      //   } else {
      //     this.setState({
      //       errorMsg: message,
      //       loading: false,
      //       update: false,
      //     })
      //     return false;
      //   }
      // })
    });

    const {
      group: _group,
      identifier
    } = props;
    this.state = {
      errorMsg: '',
      loading: false,
      data: {},
      update: false,
      group: _group,
      identifier
    };

    if (_group === undefined) {
      console.error('props: group 是必须的');
      this.state.errorMsg = 'props: group 是必须的';
      return false;
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.group !== prevState.group || nextProps.identifier !== prevState.identifier) {
      return {
        group: nextProps.group,
        identifier: nextProps.identifier,
        update: true
      };
    }

    return null;
  }

  componentDidMount() {
    this.queryData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.update && this.state.update) {
      this.queryData();
    }
  }

  render() {
    const {
      errorMsg,
      loading,
      data
    } = this.state;
    const {
      layout,
      items = []
    } = data;
    const classNameMap = {
      'Compact': 'Statistic-compact'
    };
    return /*#__PURE__*/React.createElement(Spin, {
      spinning: loading
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        color: 'red'
      }
    }, errorMsg), /*#__PURE__*/React.createElement("div", {
      className: classNameMap[layout]
    }, items && items.map((item, i) => {
      return /*#__PURE__*/React.createElement(Statistic, _extends({}, item, {
        key: i
      }));
    })));
  }

}