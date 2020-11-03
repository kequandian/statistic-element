/**
    * @author Yang,YN  2018-9-6
    * @editor LLH
    * @updated 2018年10月9日
    * @desc
    * @eg
    <ColumnChain>
      title = ''       //标题
      subTitle =''     //副标题
      value =''        //值
      note = ''        //备注
      iconType = ''    //图标箭头类型，默认是向上
    </ColumnChain>
 */
import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

class ColumnChain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title,
      subTitle,
      value,
      note,
      iconType
    } = this.props;
    const style = {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      backgroundColor: '#fff',
      padding: '1em',
      width: '200px',
      ...this.props.style
    };
    const titleStyle = {
      color: '#000',
      ...this.props.titleStyle
    };
    const valueStyle = {
      color: '#0084FF',
      padding: '0.2em 0',
      display: 'flex',
      justifyContent: 'center',
      ...this.props.valueStyle
    };
    const subTitleStyle = {
      padding: '0.2em 0',
      ...this.props.subTitleStyle
    };
    const noteStyle = {
      padding: '0.2em 0',
      ...this.props.noteStyle
    };
    const iconStyle = {
      marginLeft: '0.5em',
      color: iconType && iconType == 'up' ? 'red' : 'green',
      ...this.props.iconStyle
    };
    return /*#__PURE__*/React.createElement("div", {
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      style: titleStyle
    }, title), /*#__PURE__*/React.createElement("div", {
      style: valueStyle
    }, value), subTitle ? /*#__PURE__*/React.createElement("div", {
      style: subTitleStyle
    }, "\u6628\u65E5\uFF1A", subTitle) : null, note ? /*#__PURE__*/React.createElement("div", {
      style: noteStyle
    }, "\u4E0B\u964D\uFF1A", note, iconType && iconType == 'up' ? /*#__PURE__*/React.createElement(ArrowUpOutlined, {
      style: iconStyle
    }) : /*#__PURE__*/React.createElement(ArrowDownOutlined, {
      style: iconStyle
    })) : null);
  }

}

export default ColumnChain;