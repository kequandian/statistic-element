import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import APIContainer from "../APIContainer";
import AutoChart from "../APIContainer/AutoChart";
import GetField from "../APIContainer/GetField";
import ColumnChainDemo from "../Demo/ColumnChainDemo";
import SpecialLabelPieDemo from "../Demo/SpecialLabelPieDemo";
import NumberRowsDemo from "../Demo/NumberRowsDemo";
import ColumnTotalDemo from "../Demo/ColumnTotalDemo";
import MonthReportDemo from "../Demo/MonthReportDemo";
import SingleColumnChainDemo from "../Demo/SingleColumnTatalDemo";
const {
  Content
} = Layout; //ip

const ipList = ['ye128.natapp1.cc', '192.168.3.240:8080', '192.168.3.155:8080', '192.168.3.236:8888'];
let ipAddress = ipList[3]; // export default function () {
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
//订单 plaformOrder //影院 cinema

export default function () {
  return /*#__PURE__*/React.createElement(Content, {
    style: {
      padding: '20px',
      background: '#f2f2f3'
    }
  }, /*#__PURE__*/React.createElement(APIContainer, {
    API: `http://${ipAddress}/api/adm/stat/meta/template/plaformOrder`,
    queryData: {},
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAxMCIsInVzZXJJZCI6Ijg3NjcwODA4MjQzNzE5NzgzMCIsInVzZXJUeXBlIjoxMDEsImJVc2VyVHlwZSI6IlNZU1RFTSIsInRlbmFudE9yZ0lkIjoxMDAwMDAwMDAwMDAwMDAwMTAsImFjY291bnQiOiJhZG1pbiIsImV4dHJhVXNlclR5cGUiOjAsImlhdCI6MTYwNDQ2Mjk1MCwianRpIjoiODc2NzA4MDgyNDM3MTk3ODMwIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2MDQ3MjIxNTB9.2kD1hzP6JWeiwgKPZheTe8RYmbDY-_bHgdv4DlYKAGzzeWbVCtdLBYzpEtx-WpyO5iNkZm5U2gPxkHQt5knJ5Q"
  }, /*#__PURE__*/React.createElement(AutoChart, null)));
}