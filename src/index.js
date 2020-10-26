import React from 'react';
import ReactDOM from 'react-dom';

import APIContainer from '@/APIContainer';
import AutoChart from '@/APIContainer/AutoChart';
import GetField from  './APIContainer/GetField';
import ColumnChainDemo from './Demo/ColumnChainDemo';
import SpecialLabelPieDemo from  './Demo/SpecialLabelPieDemo';
import NumberRowsDemo from './Demo/NumberRowsDemo';
import ColumnTotalDemo from './Demo/ColumnTotalDemo';

//ip
const ipList = ['ye128.natapp1.cc', '192.168.3.240:8080'];
let ipAddress = ipList[1];

// ReactDOM.render(
//   <APIContainer
//     API={`http://${ipAddress}/api/adm/stat/meta/advertiserTotal`}
//     queryData={{
//       pattern: 'count',
//     }}
//   >
//     {/* <AutoChart /> */}
//     <GetField dataField='rows'>
//       <ColumnChainDemo/>
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

//
ReactDOM.render(
  <APIContainer
    API={`http://${ipAddress}/api/adm/stat/meta/orderStatePie`}
    queryData={{
      pattern: 'rate',
    }}
  >
    {/* <AutoChart /> */}
    <GetField dataField='data'>
      <ColumnTotalDemo/>
    </GetField>
  </APIContainer>
  , document.getElementById("root")
);