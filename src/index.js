import React from 'react';
import ReactDOM from 'react-dom';

import APIContainer from '@/APIContainer';
import AutoChart from '@/APIContainer/AutoChart';
import GetField from  './APIContainer/GetField';
import ColumnChainDemo from './Demo/ColumnChainDemo';
import SpecialLabelPieDemo from  './Demo/SpecialLabelPieDemo';
import NumberRowsDemo from './Demo/NumberRowsDemo';
import ColumnTotalDemo from './Demo/ColumnTotalDemo';
import MonthReportDemo from './Demo/MonthReportDemo';
import SingleColumnChainDemo from './Demo/SingleColumnTatalDemo';

//ip
const ipList = ['ye128.natapp1.cc', '192.168.3.240:8080','192.168.3.155:8085'];
let ipAddress = ipList[2];

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

//组合
ReactDOM.render(
    <APIContainer
        API={`http://${ipAddress}/api/adm/stat/meta/template/cinema`}
        queryData={{
          orgId: '100000000000000094',
        }}
      >
          <AutoChart/>
    </APIContainer>
  , document.getElementById("root")
);