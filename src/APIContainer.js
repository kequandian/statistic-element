import React, { useState, useEffect } from 'react';

export default function APIContainer(props) {
  const [data, setData] = useState({});
  const { API, queryData, children } = props;

  useEffect(_ => {
    promiseAjax(API, queryData)
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

function promiseAjax(url, data, options = {}) {
  const { method = 'GET', async = true } = options;

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, async);
    xhr.responseType = 'JSON';

    xhr.onreadystatechange = () => {

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.readyState === 4 && xhr.status === 200) {
        let result
        try {
          result = JSON.parse(xhr.responseText);
          resolve(result);

        } catch (error) {
          reject("返回的数据非 json 格式");
        }
      } else {
        reject(xhr.statusText);
      }
    }
    xhr.onerror = (err) => {
      reject(err);
    }

    xhr.send(data);
  })
}