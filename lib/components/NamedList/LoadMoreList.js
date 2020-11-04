import React, { useState } from 'react';
import { List, Button } from 'antd';
import { useMount } from 'ahooks';
import formatData from "../../APIContainer/formatData";
export default function LoadMoreList(props) {
  const {
    onQuery,
    children
  } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
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
  return /*#__PURE__*/React.createElement(List, {
    loading: loading,
    loadMore: /*#__PURE__*/React.createElement(React.Fragment, null, loading ? null : /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        marginTop: 12,
        height: 32
      }
    }, /*#__PURE__*/React.createElement(Button, null, "\u52A0\u8F7D\u66F4\u591A"))),
    dataSource: data,
    renderItem: item => /*#__PURE__*/React.isValidElement(Child) ? /*#__PURE__*/React.cloneElement(Child, item) : /*#__PURE__*/React.createElement(Child, item)
  });
}