import React, { useState, useRef, useEffect } from 'react';
import { useInViewport } from 'ahooks';
import formatData from '@/APIContainer/formatData';
import { Spin } from 'antd';

export default function AutoLoadList(props) {
  const { onQuery, children } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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

    })
      .finally(_ => setLoading(false))
  }

  const Child = React.Children.only(children);

  return <Spin spinning={loading}>
    <div style={{
      overflow: 'auto',
      position: 'relative'
    }}>
      {data.map((item, i) => React.isValidElement(Child) ?
        React.cloneElement(Child, {
          ...item,
          key: i,
        })
        : <Child key={i} {...item} />)}
      <div ref={probeRef} style={{ position: 'relative', bottom: data.length ? 40 : undefined }}></div>
    </div>
  </Spin>
}