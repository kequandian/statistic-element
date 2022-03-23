import React from 'react';
import GetField from "../../APIContainer/GetField";
import NamedLayout from "../../APIContainer/NamedLayout";
import NamedCart from "../../APIContainer/NamedCart";
import NamedList from "../../APIContainer/NamedList";
export default function Demo(props) {
  // return <NamedList name="AutoLoadList" API="/api/adm/stat/meta/template/table">
  //   <GetField dataField="data">
  //     <NamedCart name="TableStatistic" />
  //     <NamedCart name="SingleColumnTatal" />
  //   </GetField>
  // </NamedList>
  // return <NamedLayout name="WrappedGrid">
  //   <NamedList name="LoadMoreList" API="/api/adm/stat/meta/template/table">
  //     <GetField dataField="data">
  //       <NamedCart name="TableStatistic" />
  //     </GetField>
  //   </NamedList>
  // </NamedLayout>
  return /*#__PURE__*/React.createElement(NamedList, {
    name: "LoadMoreList",
    API: "/api/adm/stat/meta/template/table"
  }, /*#__PURE__*/React.createElement(NamedLayout, {
    name: "WrappedGrid"
  }, /*#__PURE__*/React.createElement(GetField, {
    dataField: "data"
  }, /*#__PURE__*/React.createElement(NamedCart, {
    name: "TableStatistic"
  }))));
}