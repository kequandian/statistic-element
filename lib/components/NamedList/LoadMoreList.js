function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useRef } from 'react';
import { List, Button } from 'antd';
import formatData from "../../APIContainer/formatData";
import { useMount, useSize } from 'ahooks';
import useLayout from "../../utils/useLayout";
import ContainerContext from "../../utils/ContainerContext";
export default function LoadMoreList(props) {
  const {
    onQuery,
    children
  } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [layoutRef, {
    getClassName
  }] = useLayout();
  const containerRef = useRef();
  const size = useSize(containerRef);
  useMount(_ => {
    handleQuery();
  });

  function handleQuery() {
    setLoading(true);
    onQuery().then(repsonseData => {
      if (Array.isArray(repsonseData.children)) {
        console.log('TODO', formatData(repsonseData));
        setData(formatData(repsonseData));
      } else {
        console.log('TODO', repsonseData);
      }
    }).finally(_ => setLoading(false));
  }

  const Child = React.Children.only(children);
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, /*#__PURE__*/React.createElement(List, {
    loading: loading,
    className: getClassName(),
    loadMore: /*#__PURE__*/React.createElement(React.Fragment, null, loading ? null : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        margin: 12,
        height: 32
      }
    }, /*#__PURE__*/React.createElement(Button, null, "\u52A0\u8F7D\u66F4\u591A"))),
    dataSource: data,
    renderItem: item => /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...item,
      ref: layoutRef
    }) : /*#__PURE__*/React.createElement(Child, _extends({}, item, {
      ref: layoutRef
    }))
  })));
}