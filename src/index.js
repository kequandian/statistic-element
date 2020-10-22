import React from 'react';
import ReactDOM from 'react-dom';

import APIContainer from '@/APIContainer';
import Statistic from '@/Statistic';

ReactDOM.render(
  <APIContainer
    API={'http://test.com/api/test'}
    query={PromiseAjax}
    queryData={{
      extraData: 'test',
    }}
  >
    <Statistic />
  </APIContainer>
  , document.getElementById("root")
);



function PromiseAjax(url, data, options = {}) {
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