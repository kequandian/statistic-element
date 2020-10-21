/**
 * @author LLH
 * @editor 
 * @updated 2018年10月26日
 * @desc 以上下的结构形式展示数据。同一组的会显示在同一个框内。
 * @eg
      <GroupCard
       rates={ 
        [ { name: 'test title', value: 'test value' } ]
       }
      />
 */
import React from 'react';
import readStyle from "../../../utils/readStyle";
import "./index.css";
export default (({
  fieldStyles = {},
  recordStyles = [],
  rates = []
}) => {
  const styles = readStyle(recordStyles);
  return /*#__PURE__*/React.createElement("div", {
    style: fieldStyles,
    className: "kqd-statistic-groupCard"
  }, rates.map((item, i) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "kqd-statistic-groupCard-item",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: styles(0),
      className: "kqd-statistic-groupCard-title"
    }, item.name), /*#__PURE__*/React.createElement("div", {
      style: styles(1),
      className: "kqd-statistic-groupCard-value"
    }, item.value));
  }));
});