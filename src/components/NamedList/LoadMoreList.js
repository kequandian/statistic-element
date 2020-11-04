import React, { useState } from 'react';
import { List, Button } from 'antd';
import { useMount } from 'ahooks';
import formatData from '@/APIContainer/formatData';

export default function LoadMoreList(props) {
  const { onQuery, children } = props;
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
        setData(formatData(repsonseData))
      } else {
        console.log('TODO', repsonseData);
      }

    })
      .finally(_ => setLoading(false))
  }

  const Child = React.Children.only(children);

  return <List
    loading={loading}
    loadMore={<>
      {loading ? null : <div style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
      }}><Button>加载更多</Button></div>}
    </>}
    dataSource={data}
    renderItem={item => React.isValidElement(Child) ?
      React.cloneElement(Child, item)
      : <Child {...item} />
    }
  />
}