import React, { useState, useRef, useEffect } from 'react';
import { useInViewport } from 'ahooks';
import formatData from "../../APIContainer/formatData";
import { Spin } from 'antd';
export default function AutoLoadList(props) {
  const {
    onQuery,
    children
  } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [childProps, setChildProps] = useState({});
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
        setChildProps(repsonseData);
        setData(repsonseData.children);
      }
    }).finally(_ => setLoading(false));
  }

  const Child = React.Children.only(children);
  return /*#__PURE__*/React.createElement(Spin, {
    spinning: loading
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto',
      position: 'relative'
    }
  }, data.map(item => /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, childProps) : /*#__PURE__*/React.createElement(Child, childProps)), /*#__PURE__*/React.createElement("div", {
    ref: probeRef,
    style: {
      position: 'relative',
      bottom: data.length ? 40 : undefined
    }
  })));
}