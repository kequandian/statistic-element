import React, { useState, useRef, useEffect } from 'react';
import { useInViewport } from 'ahooks';
import formatData from '@/APIContainer/formatData';
import { Spin } from 'antd';
import { useSize } from 'ahooks';
import useLayout from '@/utils/useLayout';
import ContainerContext from '@/utils/ContainerContext';

export default function AutoLoadList(props) {
  const { onQuery, children } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [layoutRef, { getClassName }] = useLayout();
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

    })
      .finally(_ => setLoading(false))
  }

  const Child = React.Children.only(children);

  return <div
    style={{
      overflow: 'auto',
      position: 'relative'
    }}
    className={getClassName()}
    ref={containerRef}
  >
    <Spin spinning={loading}>
      <ContainerContext.Provider value={size}>
        {data.map((item, i) => React.isValidElement(Child) ?
          React.cloneElement(Child, {
            ...item,
            key: i,
            ref: layoutRef,
          })
          : <Child key={i} {...item} ref={layoutRef} />)}
        <div ref={probeRef} style={{ position: 'relative', bottom: data.length ? 40 : undefined }}></div>
      </ContainerContext.Provider>
    </Spin>
  </div>
}