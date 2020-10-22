import React from 'react';
import ReactDOM from 'react-dom';
import { regQueryMethod } from "./Chart";
import Chart from "./Demo/ChartDemo";
regQueryMethod(PromiseAjax);
ReactDOM.render( /*#__PURE__*/React.createElement(Chart, {
  group: "stat:profit"
}), document.getElementById("root"));
let hostName = ''; // 示例: http://192.168.1.2/

function PromiseAjax(url, data, options = {}) {
  const {
    method = 'GET',
    async = true
  } = options;
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method, `${hostName}${url}`, async);
    xhr.responseType = 'JSON';

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.readyState === 4 && xhr.status === 200) {
        let result;

        try {
          result = JSON.parse(xhr.responseText);
          resolve(result);
        } catch (error) {
          reject("返回的数据非 json 格式");
        }
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = err => {
      reject(err);
    };

    xhr.send(data);
  });
}