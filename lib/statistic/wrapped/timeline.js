function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { Component } from 'react'; // import moment from 'moment';

import { Flex } from 'layout-flex';
import ListItem from "../../components/ListItem";
import "./index.css";
const {
  FlexItem
} = Flex;

const OptionItem = ({
  data,
  className = ''
}) => /*#__PURE__*/React.createElement("span", {
  className: `Statistic-timeline-optionItem${className}`
}, data.name);

export default ((ChartComponent, config) => {
  return class TimelineWrapped extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: 0
      };
    }

    render() {
      const {
        name,
        timeline = []
      } = this.props;
      const {
        type
      } = this.state;
      const optionList = timeline.map((item, i) => ({
        name: item.name,
        index: i
      }));
      const chartProps = {
        title: `${optionList[type] && optionList[type].name || ''}${name}`,
        rates: timeline[type] && timeline[type].rates || []
      };
      return /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(FlexItem, {
        flex: 1
      }, /*#__PURE__*/React.createElement("div", {
        className: "Statistic-timeline-option"
      }, /*#__PURE__*/React.createElement(ListItem, {
        data: optionList,
        value: type,
        valueField: "index" // activeClass={ styles.active }
        ,
        onClick: (i, data) => {
          this.setState({
            type: data.index
          });
        }
      }, /*#__PURE__*/React.createElement(OptionItem, null))), /*#__PURE__*/React.createElement(ChartComponent, _extends({}, chartProps, config))));
    }

  };
}); // function getDay(){
//   const nowHour = moment().hour();
//   const rst = [];
//   for (let i = 0; i < nowHour; i++) {
//     rst.unshift( moment().hour( nowHour - i ).minute(0).format('HH:mm') );
//   }
//   return rst;
// }
// function getWeek(){
//   const weekMap = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
//   const nowWeek = moment().isoWeekday() - 1;
//   const rst = [];
//   for (let i = 0; i < 7; i++) {
//     let temp = nowWeek - i;
//     if(temp < 0){
//       temp += 7;
//     }
//     rst.unshift( `${moment().dayOfYear( moment().dayOfYear()- i ).format('MM-DD')} ${weekMap[ temp ]}` );
//   }
//   return rst;
// }
// function getMonth(){
//   const nowDay = moment().date();
//   const rst = [];
//   for (let i = 0; i < nowDay; i++) {
//     rst.unshift( moment().date( nowDay - i ).format('MM-DD') );
//   }
//   return rst;
// }