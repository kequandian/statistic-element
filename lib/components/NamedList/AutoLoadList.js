function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useRef, useEffect } from 'react';
import { useInViewport } from 'ahooks';
import formatData from "../../APIContainer/formatData";
import { Spin } from 'antd';
import { useSize } from 'ahooks';
import useLayout from "../../utils/useLayout";
import ContainerContext from "../../utils/ContainerContext";
export default function AutoLoadList(props) {
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
  const probeRef = useRef(null);
  const inViewPort = useInViewport(probeRef);
  useEffect(_ => {
    if (!loading && inViewPort) {
      handleQuery();
    }
  }, [inViewPort]);

  function handleQuery() {
    setLoading(true);
    onQuery().then(repsonseData => {
      if (Array.isArray(repsonseData.children)) {
        console.log('TODO', repsonseData);
        setData(formatData(repsonseData));
      }
    }).finally(_ => setLoading(false));
  }

  const Child = React.Children.only(children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative'
    },
    className: getClassName(),
    ref: containerRef
  }, /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, /*#__PURE__*/React.createElement(ContainerContext.Provider, {
    value: size
  }, data.map((item, i) => /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, { ...item,
    key: i,
    ref: layoutRef
  }) : /*#__PURE__*/React.createElement(Child, _extends({
    key: i
  }, item, {
    ref: layoutRef
  }))), /*#__PURE__*/React.createElement("div", {
    ref: probeRef,
    style: {
      position: 'relative',
      bottom: data.length ? 40 : undefined
    }
  }))));
}