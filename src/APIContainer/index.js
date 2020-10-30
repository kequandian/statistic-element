import React, { useState, useEffect } from 'react';
import formatData from './formatData';
import { query } from 'zero-element-antd/lib/utils/request';

/**
 * 
 * @param {boolean} extend 从 API 获取的数据, 是展开后传给子组件, 还是作为 data 传给子组件
 */
export default function APIContainer(props) {
  const [data, setData] = useState({});
  const { API, queryData = {}, extend = true, children, ...rest } = props;

  useEffect(_ => {
    query(API, queryData)
      .then(responseData => {
        console.log('request rst: ', responseData);

        if (responseData) {
          const list = formatData(responseData);
          setData({
            list: list,
            layout: responseData.layout,
            span: responseData.span,
            title: responseData.title,
          });
        }
      })
  }, []);

  return React.cloneElement(children, {
    ...(extend ? { ...data } : { data }),
    ...rest,
  })
}