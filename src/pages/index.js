import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import APIContainer from '@/APIContainer';
import AutoChart from '@/APIContainer/AutoChart';
import GetField from '@/APIContainer/GetField';
import ColumnChainDemo from '@/Demo/ColumnChainDemo';
import SpecialLabelPieDemo from '@/Demo/SpecialLabelPieDemo';
import NumberRowsDemo from '@/Demo/NumberRowsDemo';
import ColumnTotalDemo from '@/Demo/ColumnTotalDemo';
import MonthReportDemo from '@/Demo/MonthReportDemo';
import SingleColumnChainDemo from '@/Demo/SingleColumnTatalDemo';

const { Content } = Layout;

//ip
const ipList = ['ye128.natapp1.cc', '192.168.3.240:8080', '192.168.3.155:8085', '192.168.3.236:8888'];
let ipAddress = ipList[2];

// export default function () {
//   return <APIContainer
//     API={`/api/adm/stat/meta/template/advertiser`}
//     queryData={{
//       pattern: '',
//     }}
//   >
//     <AutoChart />
//   </APIContainer>
// }

//count
// ReactDOM.render(
//   <APIContainer
//     API={`http://${ipAddress}/api/adm/stat/meta/advertiserTotal`}
//     queryData={{
//       pattern: 'count',
//     }}
//   >
//     <GetField dataField='rates'>
//       <SingleColumnTatalDemo/>
//     </GetField>
//   </APIContainer>
//   , document.getElementById("root")
// );

//饼图
// ReactDOM.render(
//   <APIContainer
//     API={`http://${ipAddress}/api/adm/stat/meta/orderStatePie`}
//     queryData={{
//       pattern: 'rate',
//     }}
//   >
//     {/* <AutoChart /> */}
//     <GetField dataField='data'>
//       <SpecialLabelPieDemo/>
//     </GetField>
//   </APIContainer>
//   , document.getElementById("root")
// );

//柱状图
// ReactDOM.render(
//   <APIContainer
//     API={`http://${ipAddress}/api/adm/stat/meta/mon`}
//     queryData={{
//       pattern: 'TimeLine',
//     }}
//   >
//     <GetField dataField='data'>
//       <MonthReportDemo/>
//     </GetField>
//   </APIContainer>
//   , document.getElementById("root")
// );

export default function () {
  return (
    <Content style={{ padding: '20px', background: '#f2f2f3' }}>
      <APIContainer
        API={`http://${ipAddress}/api/adm/stat/meta/template/groud_two`}
        queryData={{
        }}
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDEyMyIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzkyNyIsInVzZXJUeXBlIjoxLCJiVXNlclR5cGUiOiJVU0VSIiwidGVuYW50T3JnSWQiOjEwMDAwMDAwMDAwMDAwMDEyMywiYWNjb3VudCI6IjEzODAwMTM4MDA1IiwiZXh0cmFVc2VyVHlwZSI6MCwiaWF0IjoxNjA0Mjk5MDMwLCJqdGkiOiI4NzY3MDgwODI0MzcxOTc5MjciLCJzdWIiOiIxMzgwMDEzODAwNSIsImV4cCI6MTYwNDU1ODIzMH0.0W8y0sRdzR3-B6F6WhMB_jbd5RX142k8RzQFAqkTuiK8qQ9AQwfTByaCtfxYQfGh8iuy5fuf2rHW-7niQl0mbA"
      >
        <AutoChart />
      </APIContainer>
    </Content>
      
  )

}
