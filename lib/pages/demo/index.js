import React from 'react';
import GetField from "../../APIContainer/GetField";
import APIContainer from "../../APIContainer";
import NamedLayout from "../../APIContainer/NamedLayout";
import NamedCart from "../../APIContainer/NamedCart";
import NamedList from "../../APIContainer/NamedList";
const data = {
  name: '',
  build: [{
    type: 'getData_field',
    value: 'items'
  }, {
    type: 'layout',
    value: 'Grid'
  }, {
    type: 'component',
    value: 'ColumnChain'
  }, {
    type: 'component',
    value: 'LineGrid'
  }]
};
export default function Demo(props) {
  return /*#__PURE__*/React.createElement(NamedList, {
    name: "AutoLoadList",
    API: "/api/adm/stat/meta/template/table"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GetField, {
    dataField: "list",
    itemIndex: 0
  }, /*#__PURE__*/React.createElement(NamedCart, {
    name: "TableStatistic"
  })), /*#__PURE__*/React.createElement(GetField, {
    dataField: "list",
    itemIndex: 1
  }, /*#__PURE__*/React.createElement(NamedCart, {
    name: "MonthReportDemo"
  }))));
  return /*#__PURE__*/React.createElement(APIContainer, {
    API: "/api/adm/stat/meta/template/table"
  }, /*#__PURE__*/React.createElement(NamedLayout, {
    name: "Grid"
  }, /*#__PURE__*/React.createElement(GetField, {
    dataField: "list",
    itemIndex: 0
  }, /*#__PURE__*/React.createElement(NamedCart, {
    name: "TableStatistic"
  })), /*#__PURE__*/React.createElement(GetField, {
    dataField: "list",
    itemIndex: 1
  }, /*#__PURE__*/React.createElement(NamedCart, {
    name: "MonthReportDemo"
  }))));
  return /*#__PURE__*/React.createElement(GetField, {
    dataField: "items"
  }, /*#__PURE__*/React.createElement(NamedLayout, {
    name: "Grid"
  }, /*#__PURE__*/React.createElement(NamedCart, {
    name: "ColumnChain"
  }), /*#__PURE__*/React.createElement(NamedCart, {
    name: "LineGrid"
  }))); // return getData(getLayout(['ColumnChain', 'LineGrid'], 'Grid'), 'items')
}