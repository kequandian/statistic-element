import React, { useState, useEffect } from 'react';

export default function APIContainer(props) {
  const [data, setData] = useState({});
  const { query, children } = props;

  useEffect(_ => {
    query(API, queryData)
      .then(responseData => {
        console.log('request rst: ', responseData);

        if (responseData && responseData.code === 200) {
          setData(responseData.data);
        }
      })
  }, []);

  return React.cloneElement(children, {
    data: data,
  })
}